import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import ServerIndexItem from './server_name'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)

  }


//currently mapping over each server vice the users subscribed servers
  render() {
    let servers = this.props.servers;
      return (
        <div className='sidebar-wrapper'>

            <Link to="/app/directs">
          <div className='direct-message-button'>

          </div>
            </Link>

          <div className='sidebar-control'></div>

          <ul className="index-item-wrapper">
            {Object.keys(servers).map((key)=>
              <ServerIndexItem className='server-index-item'
               key={key} server={servers[key]}/>
            )}
          </ul>

          <div className="add-server-button circle-base">
            <div id='add-server-plus'>+</div>
          </div>
          {/*TODO: Route for add server form*/}
        </div>
    );
  }
}


///////////////////////////////////////////////////////////////////////////////////////
// container // 
const mapStateToProps = (state) => {
  return {
    servers: state.servers,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
   
//   }
// }

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Sidebar)