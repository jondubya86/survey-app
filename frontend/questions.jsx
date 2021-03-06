var React = require('react')
var $ = require('jquery')
var Question = require('./question.jsx')

var Answer = React.createClass({
  getInitialState: function() {
    return ({questions: null})
  },
  componentDidMount: function() {
    var that = this
    $.ajax({
      url: '/api/question',
      type: 'GET',
      success: function(data) {
        that.setState({questions: data})
      }
    })
  },
  render: function() {
    console.log('questions component with id', this.state.questions)
  if(this.state.questions) {
      return(
        <div>
          {this.state.questions.map(function(question, idx){
            return (<Question key={idx} question={question}/>)
          })}
        </div>
      )
    } else {
      return (<div></div>)
    }
  }
})

module.exports = Answer
