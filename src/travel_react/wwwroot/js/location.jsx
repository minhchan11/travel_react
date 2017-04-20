
var Location = React.createClass({
    render: function() {
        return (
          <div className="Location">
        {this.props.children}
        </div>
      );
    }
});

var LocationList = React.createClass({
    getInitialState: function () {
       return { data: this.props.initialData };
    },
    render: function() {
        var eachLocation = this.state.data.map(function(location) {
            return (
              <Location key={location.id}>
            {location.name}
          </Location>
      );
});
return (
  <div className="LocationList">
    {eachLocation}
  </div>
    );
}
});

var Location = React.createClass({
    render: function() {
        return (
          <div className="Location">
            {this.props.children}
          </div>
      );
    }
});

var LocationForm = React.createClass({
    handleSubmit: function (e) {
        var newName = this.state.name;
    },
    render: function() {
        return (
          <form className="LocationForm" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="new place name" value={this.state.name}/>
            <input type="submit" value="Post" />
          </form>
      );
    }
});
