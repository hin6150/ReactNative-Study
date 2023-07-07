package com.nativecounter

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext

class CounterManager: SimpleViewManager<CounterView>() {
    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(p0: ThemedReactContext): CounterView {
        return CounterView(p0)
    }

    companion object{
        const val REACT_CLASS = "Counter"
    }
}