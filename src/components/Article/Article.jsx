import './Article.css'

import Wrapper from '../Wrapper/Wrapper'

function Article({title, body, cls}) {
    return (
        <Wrapper wrapperCls={cls}>
            <>
                <div className="article-title" >{title}</div>
                <div className="article-body">{body}</div>
            </>
        </Wrapper>
    );
}

export default Article;