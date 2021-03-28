import React, { Component } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { RiCheckboxBlankCircleLine, RiCheckboxCircleLine } from 'react-icons/ri'
import { CgMenuGridO } from 'react-icons/cg'

const t1 = {
	title: "a",
	description: "b"
}

export class Task extends Component {
	constructor() {
		super()
	}

	state = {
		icon: <RiCheckboxBlankCircleLine /> 
	}

	render() {
		return (
			<div className="task">
				<div className="done" onClick>{this.state.icon}</div>
				<div className="description">
					<div className="header">{this.props.title}</div>
					<div className="brief">{this.props.description}</div>
					<div className="date">17 Aug 2021</div>
				</div>
				<div className="bell"></div>
			</div>
		)
	}
}

export class List extends Component {
	state = {
		active: [],
		completed: [],
		separator: (<div></div>)
	}

	constructor() {
		super()
		this.addTask = () => {
			let title = window.prompt("Title")
			let description = window.prompt("Desc")
			let task = {
				title,
				description
			}
			this.setState({active: [...this.state.active, <Task {...task} />]})
		}

		this.completeTask = () => {

		}
	}

	render() {
		return (
			<div className="list">
				<p className="tag">{this.props.title}</p>
				<div className="ham"><CgMenuGridO /></div>
				<div className="add-task" onClick={this.addTask}>
					<div className="add"><AiFillPlusCircle /></div>
					<div className="header">Add Task</div>
				</div>
				<div className="all">
					{this.state.active}
				</div>
				{this.state.separator}
				<div className="completed">
					{this.state.completed}
				</div>
			</div>
		)
	}
}