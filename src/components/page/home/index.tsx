import React, { Component } from 'react'
import { connect } from "react-redux";
import _ from "lodash"
import * as actions from '../../../actions';
import { articlesI } from './types';
import './home.scss'

export type propsI = {
    articles: articlesI[]
    loadHomeData: () => void;
};

type stateI = {
    articlesData: articlesI[];
};

class Home extends Component<propsI,stateI> {
    state = {
        articlesData: [] as articlesI[],
    }

    componentDidMount() {
        this.props.loadHomeData();
    }

    componentDidUpdate(prevProps: Readonly<propsI>, prevState: Readonly<stateI>, snapshot?: any) {
        const { articles } = this.props;
        const { articlesData } = this.state;
        if(articles?.length > 0 && articlesData?.length === 0){
            this.setState({ articlesData : _.orderBy(articles, ['upvotes'], ['desc'])})
        }
    }

    handleSorting = (name:string) => {
        const { articlesData } = this.state;
        this.setState({ articlesData : _.orderBy(articlesData, [name], ['desc'])})
    }

    render() {
        const { articlesData } = this.state;
        return (
            <div className="home">
                <div className="heading">Articles List</div>
                <div className="articles-block">
                    <div className="articles-upvoted-recent-btn">
                        <button className="btn-upvoted" type="button" onClick={() => this.handleSorting('upvotes')}> Most Upvoted </button>
                        <button className="btn-recent" type="button" onClick={() => this.handleSorting('date')}> Most Recent </button>
                    </div>
                    <div className="articles-table">
                        <table>
                            <thead>
                            <tr>
                                <th>Sr No</th>
                                <th>Title</th>
                                <th>Upvotes</th>
                                <th>Publish Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                articlesData.map((item,index) =>
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{item.title}</td>
                                        <td>{item.upvotes}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                )
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state: { home: { homeItems: articlesI[]; }; }) {
    return {
        articles: state.home.homeItems,
    }
}

export default connect(mapStateToProps, actions)(Home);