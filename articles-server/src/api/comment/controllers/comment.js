'use strict';

/**
 * comment controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::comment.comment', ({ strapi }) => ({
	async create(ctx) {
		ctx.request.body.data.user = ctx.state.user.id;
		console.log(ctx.request.body.data);

		const { articleId } = ctx.params;

		ctx.request.body.data.article = articleId;

		// 게시글 존재 유무 확인
		// id로 데이터 조회
		const article = await strapi.entityService.findOne(
			'api::article.article',
			articleId,
		);
		if (!article) {
			ctx.throw(404);
		}

		const entity = await strapi
			.service('api::comment.comment')
			.create(ctx.request.body);

		return entity;
	},
	async find(ctx) {
		// articleId로 댓글 조회
		const entities = await strapi.entityService.findMany(
			'api::comment.comment',
			{
				filters: {
					article: ctx.params.articleId,
				},
			},
		);

		return entities;
	},
	async update(ctx) {
		const { id } = ctx.params; // URL 파라미터에서 id 추출

		const comment = await strapi.entityService.findOne(
			'api::comment.comment',
			id,
			{ populate: '*' },
		); // id로 데이터 조회

		// 데이터가 존재하지 않을 때
		if (!comment) {
			return ctx.throw(404);
		}

		// article 또는 user 변경 막기
		if (ctx.request.body.data.article || ctx.request.body.data.user) {
			return ctx.throw(400, 'article or user field cannot be changed');
		}
		// 사용자 확인
		if (ctx.state.user.id !== comment.user.id) {
			return ctx.unauthorized(`You can't update this entry`);
		}

		// comment 데이터 업데이트
		const entity = await strapi.entityService.update(
			'api::comment.comment',
			id,
			{ data: ctx.request.body.data },
		);
		// 응답 반환
		return entity;
	},
	async delete(ctx) {
		const { id } = ctx.params; // URL 파라미터에서 id 추출

		const comment = await strapi.entityService.findOne(
			'api::comment.comment',
			id,
			{ populate: '*' },
		); // id로 데이터 조회

		// 데이터가 존재하지 않을 때
		if (!comment) {
			return ctx.throw(404);
		}

		// 사용자의 id와 comment의 작성자 id가 일치하는지 확인
		if (ctx.state.user.id !== comment.user.id) {
			return ctx.unauthorized(`You can't remove this entry`);
		}

		// ctx.status = 204; // no content
		await strapi.entityService.delete('api::comment.comment', id);

		ctx.status = 204;
	},
}));
