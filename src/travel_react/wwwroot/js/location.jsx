
var data = [{"id":1,"name":"Paris","things":[]},{"id":2,"name":"London","things":[]},{"id":3,"name":"Berlin","things":[]},{"id":4,"name":"Beijing","things":[]},{"id":5,"name":"Vietnam","things":[]}];

var LocationBox = React.createClass({
    render: function() {
        return (
          <div className="LocationBox">
            <h1>Locations:</h1>
            <LocationList data={this.props.data}/>
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

var LocationList = React.createClass({
    render: function() {
        var eachLocation = this.props.data.map(function(location) {
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

ReactDOM.render(
  <LocationBox data={data}/>,
  document.getElementById('locationBox')
);