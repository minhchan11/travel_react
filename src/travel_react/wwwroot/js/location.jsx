
var data = [{"id":1,"name":"Paris","things":[]},{"id":2,"name":"London","things":[]},{"id":3,"name":"Berlin","things":[]},{"id":4,"name":"Beijing","things":[]},{"id":5,"name":"Vietnam","things":[]}];


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
        return { data: [] };
    },
    componentWillMount: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
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

ReactDOM.render(
  <LocationList url="/locationdata"/>,
  document.getElementById('locationList')
);