import React from 'react';
import './css/knowledgebase.scss';

function KnowledgeBase() {
    return (
        <div className="knowledge-base">
            <main className="knowledge-base-container">
                <div className="skeleton">
                    <p>The skeleton</p>
                    <article>HTML 5+, focus on modern syntax and semantics</article>
                </div>
                <div className="body">
                    <p>The body</p>
                    <article>CSS3 , SASS preprocessor</article>
                </div>
                <div className="brain">
                    <p>The brain</p>
                    <article>JS ES6+, React, 3rd party APIs</article>
                </div>
            </main>
        </div>
    )
}

export default KnowledgeBase;
