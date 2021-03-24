import React, { Component } from 'react'
import '../stylesheets/Home.css'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine, RiLogoutBoxLine } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'
import axios from 'axios'

const userId = 300

const api = axios.create({
	baseURL: `https://picsum.photos/id/${userId}/info`
})

export default class Home extends Component {
	state = {
		user: {}
	}
	// {
	// 	"id":"77",
	// 	"author":"May Pamintuan",
	// 	"width":1631,
	// 	"height":1102,
	// 	"url":"https://unsplash.com/photos/j9nfqTi5T5o",
	// 	"download_url":"https://picsum.photos/id/77/1631/1102"
	// }

	constructor() {
		super()
		api.get('/').then(res => {
			this.setState({ user: res.data })
		})
	}
	
	render() {
		return (
			<div className="home-main">
                <div className="nav">
					<img src={logo} />
					<h1>Tasks Board</h1>
					<div className="profile">
						<img src={this.state.user.download_url} />
					</div>
					<Link to="/signin" className="logout"><RiLogoutBoxLine /></Link>
				</div>
				<div className="dashboard">
					<div className="list">
						<p className="tag">My Tasks</p>
						<div className="ham"><CgMenuGridO /></div>
						<div className="add-task">
							<div className="add"><AiFillPlusCircle /></div>
							<div className="header">Add Task</div>
						</div>
						<div className="all">
							<div className="task">
								<div className="done"><RiCheckboxBlankCircleLine /></div>
								<div className="description">
									<div className="header">Campus Build</div>
									<div className="brief"></div>
								</div>
								<div className="bell"></div>
							</div>
						</div>
						<p className="tag completed">Completed (1)</p>
						<div className="completed">
							<div className="task">
								<div className="done"><RiCheckboxCircleLine /></div>
								<div className="description">
									<div className="header">Campus Build</div>
									<div className="brief"></div>
								</div>
								<div className="bell"></div>
							</div>
						</div>
					</div>
					<div className="list-add"><AiFillPlusCircle /></div>
				</div>
            </div>
		)
	}
}