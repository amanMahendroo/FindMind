import React, { Component } from 'react'
import '../stylesheets/Home.css'
import logo from '../assets/logo3.png'
import { Link } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiLogoutBoxLine } from 'react-icons/ri'
import axios from 'axios'
import { Task, List } from './DashComponents.js'

const userId = 300

const api = axios.create({
	baseURL: `https://picsum.photos/id/${userId}/info`
})

export default class Home extends Component {
	sampleList = {
		title: "My Tasks3",
		active: [],
		completed: []
	}
	state = {
		user: {},
		lists: []
	}

	constructor() {
		super()
		api.get('/').then(res => {
			this.setState({ user: res.data })
		})
		debugger;
		this.addList = (args) => {
			this.setState({
				lists: [...this.state.lists, <List {...args} />]
			})
		}
		// this.addList({...this.sampleList})
		this.state.lists = [<List {...this.sampleList} />]
		this.queryList = () => {
			console.log(this.state.lists)
			let title = window.prompt("Enter List title")
			if (!title) {
				return
			}
			this.addList({title, active: [], completed: []})
		}
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
					<Link to="/" className="logout"><RiLogoutBoxLine /></Link>
				</div>
				<div className="dashboard">
					{this.state.lists}
				</div>
				<div className="list-add" onClick={this.queryList}><AiFillPlusCircle/></div>
            </div>
		)
	}
}