
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
    loadLocationsFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },
    componentDidMount: function () {
        this.loadLocationsFromServer();
        window.setInterval(this.loadCommentsFromServer, this.props.pollInterval);
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
  <LocationList url="/locationdata" pollInterval={2000}/>,
  document.getElementById('locationList')
);
