var EditEventLink = React.createClass({
  handleEdit: function() {
    var id = ReactDOM.findDOMNode(this.refs.id).value;
    var self = this;
    $.ajax({
      url: '/api/events/'+ id,
      data: { id: id },
      success: function(data) {
        self.props.handleEdit(data);
      },
      error: function(xhr, status, error) {
        alert('Edit error: ', status, xhr, error);
      }
    });
  },
  render: function() {
    return(
      <a href='#' onClick={this.handleEdit} ref="id" value= {this.id} >Edit</a>
    )
  }
});


var DeleteEventLink = React.createClass({
  handleDelete: function() {
    var id = ReactDOM.findDOMNode(this.refs.id).value;
    var self = this;
    $.ajax({
      url: '/api/events/',
      data: { id: id },
      success: function(data) {
        self.props.handleDelete(data);
      },
      error: function(xhr, status, error) {
        alert('Edit error: ', status, xhr, error);
      }
    });
  },
  render: function() {
    return(
      <a href='#' onClick={this.handleDelete} ref="id" value={this.id}>Delete</a>
    )
  }
});

