package com.nativecounter

import android.view.View
import android.widget.FrameLayout
import com.facebook.react.bridge.ReactContext

class CounterView (val context: ReactContext): FrameLayout(context){
    init {
        View.inflate(context, R.layout.counter_view, this)
    }
}