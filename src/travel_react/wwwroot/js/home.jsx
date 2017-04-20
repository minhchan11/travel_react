var Home = React.createClass({
    render: function() {
        return (
          <div className="Home">
            <h1 className="jumbotron">Travel Blog</h1>
<a href="/locations">Locations</a>
<a href="/persons">Persons</a>
<a href="/things">Things</a>
          </div>
      );
    }
});
ReactDOM.render(
  <Home />,
  document.getElementById('home')
);