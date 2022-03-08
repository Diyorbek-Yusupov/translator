import React, {useState} from 'react'

import '../styles/Main.css'
import LanSelection from './Lanselection'

export default function Main() {
    const heightSizer = (e) => {
        e.target.style.height = 'inherit';
        e.target.style.height = `${e.target.scrollHeight}px`
    }
    return (
        <div className="main-container">
            <div className="content">
                <LanSelection/>
                <div className="text-content">
                    <div>
                        <textarea
                            onKeyDown={heightSizer}
                            className="text-area left"
                        />
                    </div>

                    <div>
                        <textarea
                            onKeyDown={heightSizer}
                            className="text-area right"
                        />
                    </div>
                </div>
            </div>

        </div>

    )
}
