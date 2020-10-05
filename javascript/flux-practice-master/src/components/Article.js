import React, { Component, PropTypes } from 'react'
import CommentList from './CommentList';
import {deleteArticle} from '../AC/articles.js';

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object,
        onClick : PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log('---', this.refs.container)
    }

    render() {
        const { article, onClick } = this.props
        return (
            <div ref = "container">
                <h3 onClick = {onClick}>{article.title}</h3>
                {this.getBody()}
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault();
        deleteArticle(this.props.article.id);
        console.log('---', this.props.article.id);

    }

    getBody() {
        if (!this.props.isOpen) return null;
        const  comments =  this.props.article.getRelation('comments');
        return (
            <section>
                <a href="#" onClick={this.handleDelete}>Delete me</a>
                {this.props.article.text}
                <CommentList comments = {comments} />
            </section>
        )
    }
}