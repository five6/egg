import React from 'react';	
import PropTypes from 'prop-types';
import { Provider,connect } from 'react-redux';
import { fetch_topics_if_need,action_received_topic_list } from '../../actions/topic';

export default class TopicList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			displayDelete: {
				display:"none"
			}
		}
		console.log(props);
		this.tab_cn = this.tab_cn.bind(this);
		this.topicDate = this.topicDate.bind(this);
		this.getTopicDetail = this.getTopicDetail.bind(this);
		this.deleteTopic = this.deleteTopic.bind(this);
		this.onMouseOver = this.onMouseOver.bind(this);
		this.onMouseOut = this.onMouseOut.bind(this);
	}
	componentDidMount() {

	}
	componentWillReceiveProps(nextProps) {
		console.log("topicList")
		console.log(nextProps)
	}
	getTopicDetail(element){
		var topicId = element.target.attributes["data-topic-id"].value;
		window.location.href="/view/topic/"+ topicId
	}
	deleteTopic(element){
		var topicId = element.target.attributes["data-topic-id"].value;
		this.props.deleteTopic(topicId);
		// alert("will delete topic that topicId = "+ topicId)
	}
	tab_cn(tab){
		if(tab =="ask"){
			return "问答";
		}else if(tab =="share"){
			return "分享";
		}else if(tab =="job"){
			return "招聘";
		}else{
			return "其他";
		}
	}
	topicDate(date){
		return moment(date).fromNow();
	}
	onMouseOver(element){
		$(element.target).find(".deleteTopic").show();
	}
	onMouseOut(element){
		$(element.target).find(".deleteTopic").hide();
	}
	render(){
		  const { topics } = this.props;
		return(
			<div className="ui tab attached" data-tab="topics-list">
				<div className="ui feed" id="topic-event-feed">
					{topics.map(item =>
	                    <div key= {item.id} className="event">
	                      	<div className="label">
	                        	<img  src={item.author.avatar_url}/>
	                      	</div>
	                      	<div className="content">
		                        <div className="summary" onMouseOver={(e)=> this.onMouseOver(e)} onMouseLeave ={(e)=>this.onMouseOut(e)}>
		                        	<a className="user topic-user">{item.author.loginname}</a> 
	                        		<span data-topic-id={item.id} onClick={(e)=> this.getTopicDetail(e)} >{item.title}</span>
		                        	<div className="date">{this.topicDate(item.create_at)}</div>
		                        	<div className="date deleteTopic" style={this.state.displayDelete}><a data-topic-id={item.id} onClick={(e)=>this.deleteTopic(e)}>删除</a></div>
		                        </div>
	                  		</div>
	                    </div>
			         )}
		         </div>
			</div>
		)
	}
};
