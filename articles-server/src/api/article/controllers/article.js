'use strict';

/**
 * article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
	async create(ctx) {
		ctx.request.body.user = ctx.state.user.id;

		const entity = await strapi.entityService.create('api::article.article', {
			data: { ...ctx.request.body, publishedAt: new Date() },
			populate: 'user',
		});

		return entity;
	},
	async find(ctx) {
		const { _sort, _limit, id_lt, id_gt } = ctx.query;

		// 기본 id_lt 값 설정: id_lt 값이 없는 경우 기본적으로 Infinity로 설정합니다.
		const idLtValue = id_lt ? id_lt : Infinity;

		const filters = { id: { $lt: idLtValue } };

		// id_gt 값이 있을 경우, 해당 값보다 큰 id 값을 조회합니다.
		if (id_gt) {
			filters.id.$gt = id_gt;
		}

		const entries = await strapi.entityService.findMany(
			'api::article.article',
			{
				sort: { id: 'desc' },
				filters,
				limit: _limit,
				populate: 'user',
			},
		);

		return entries;
	},
	async findOne(ctx) {
		const { id } = ctx.params; // URL 파라미터에서 id 추출

		const entry = await strapi.entityService.findOne(
			'api::article.article',
			id,
			{
				populate: 'user',
			},
		);
		return entry;
	},

	async update(ctx) {
		const { id } = ctx.params; // URL 파라미터에서 id 추출

		const article = await strapi.entityService.findOne(
			'api::article.article',
			id,
			{ populate: '*' },
		); // id로 데이터 조회

		// 데이터가 존재하지 않을 때
		if (!article) {
			return ctx.throw(404);
		}

		// user 정보는 변경할 수 없도록 처리
		if (ctx.request.body.user) {
			return ctx.throw(400, 'user field cannot be changed');
		}
		// 사용자의 id와 article의 작성자 id가 일치하는지 확인
		if (ctx.state.user.id !== article.user.id) {
			return ctx.unauthorized(`You can't update this entry`);
		}

		// article 데이터 업데이트
		const entity = await strapi.entityService.update(
			'api::article.article',
			id,
			{ data: ctx.request.body, populate: '*' },
		);
		// 응답 반환
		return entity;
	},
	async delete(ctx) {
		const { id } = ctx.params; // URL 파라미터에서 id 추출

		const article = await strapi.entityService.findOne(
			'api::article.article',
			id,
			{ populate: '*' },
		); // id로 데이터 조회

		// 데이터가 존재하지 않을 때
		if (!article) {
			return ctx.throw(404);
		}

		// 사용자의 id와 article의 작성자 id가 일치하는지 확인
		if (ctx.state.user.id !== article.user.id) {
			return ctx.unauthorized(`You can't remove this entry`);
		}

		// ctx.status = 204; // no content
		await strapi.entityService.delete('api::article.article', id);

		ctx.status = 204;
	},
}));
