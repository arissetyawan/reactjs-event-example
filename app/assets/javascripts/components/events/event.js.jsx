var Event = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    event_date: React.PropTypes.string,
    place: React.PropTypes.string,
    description: React.PropTypes.string
  },
  handleEdit: function(event) {
    },
  handleDelete: function(event) {
    },
  render: function() {
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
        <td><EditEventLink handleEdit={this.handleEdit} value={event.id} /></td>
        <td><DeleteEventLink DeleteEventLink={this.handleDelete} value= {event.id} /></td>
      </tr>
    )
  }
});

