import React, {PropTypes} from 'react'
import Article from './Article'
import accordionToggleOpen from './../decorators/accordionToggleOpen';

 class ArticleList extends React.Component {

     static propTypes = {
         articles:       PropTypes.array,
         openArticleId:  PropTypes.oneOfType([
             PropTypes.string,
             PropTypes.number
         ]),
         toggleOpenArticle:  PropTypes.func.isRequired
     }

    render() {
        const {articles} = this.props
        const articleElements = articles.map(article =>
            <li key={article.id}>
                <Article article={article}
                         isOpen={this.props.openArticleId == article.id}
                         onClick={this.props.toggleOpenArticle(article.id)}
                />
            </li>)
        return (
            <div>
                <h2>Article List</h2>
                <ul>
                    {/*some comment*/}
                    {articleElements}
                </ul>
            </div>
        )
    }
}

/**
 * ###HT 2.2: Вынести функционал аккордеона в декоратор
 */
export default accordionToggleOpen(ArticleList);
