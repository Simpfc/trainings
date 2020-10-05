//decorator === HOC(Higher Order Component)
import React from 'react'

export default function accordionToggleOpen(Component) {

    return class WrapperComponent extends React.Component {
        state = {
            //суть декораторов в переисползовании кода, не привязывайся к названиям сущностей. Лучше openItemId
            openArticleId: null
        }

        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle}/>
        }

        /**
         * ###HT 2.3: ñäåëàòü âîçìîæíîñòü çàêðûâàòü ñòàòüþ ïðè ïîâòîðíîì êëèêå
         */
        toggleOpenArticle = id => ev => {
            //ок, но я б предпочел в один setState записать
            if (this.state.openArticleId === id ) {
                this.setState({
                    openArticleId: null
                })
                return;
            }

            this.setState({
                openArticleId: id
            })
        }
    }
}
