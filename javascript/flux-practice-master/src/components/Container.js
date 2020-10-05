import React , {Component, PropTypes } from 'react';
import {articleStore} from '../stores/index.js';
import ArticleList from './ArticleList.js';
import {loadAllArticles} from '../AC/articles.js'

class Container extends Component {
    constructor () {
        super();
        this.state = {
            article: articleStore.getAll()
        }
    }

    static propTypes = {

    };

    componentDidMount () {
        articleStore.addChangeListener(this.handleChange);
        if (!this.state.article.length) loadAllArticles();
    }

    componentWillUnmount () {
        articleStore.removeChangeListener(this.handleChange);
    }

    handleChange = () => {
        this.setState({
            article: articleStore.getAll(),
            loading: articleStore.loading
        });
    }


    render () {
        if( this.state.loading) return  <h1>Loading...</h1>
        return <ArticleList articles = {this.state.article}/>;
    }
}

export default Container;