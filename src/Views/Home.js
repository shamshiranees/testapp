import React from 'react'
import ButtonAppBar from '../components/AppBar';
import CarouselView from '../components/Carousel';
import Tabs from '../components/Tabbar'
import Request from '../components/Request';
import { connect } from 'react-redux'
import { setTab, setEvent, acceptRequest, generateInvoice } from '../Redux/Action'
import { ListItem, List, colors } from '@material-ui/core';
import Colors from '../Colors/Colors'
import MuiAlert from '@material-ui/lab/Alert';

class Home extends React.Component {

    selectedEventId = 'ev1'
    selectedTab = 'requests'
    constructor(props) {
        super(props);

    }

    getSelectedTab = (tab) => {
        this.props.setTab(tab)
    }
    itemChange = (item) => {
        this.props.setEvent(item)
    }
    acceptRequest = (data) => {
        this.props.acceptRequest(data)
         this.props.setTab("services")
    }

    generateInvoice = (data) => {
        console.log("data");
        
        this.props.generateInvoice(data)
         this.props.setTab("payments")
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <Tabs value={this.props.status} onTabChange={this.getSelectedTab} />
                <CarouselView data={this.props.events} onItemChange={this.itemChange} />


                {this.props.status == 'services' &&(
                     <Alert severity="info">These are your upcoming services.You could scan your customer's QR Code before service to check-in or scan QR Code to generate invoice for payments</Alert>
                )}
                <List component="nav">
                    {this.props.data[this.props.selectedEventId] && <>
                        {this.props.data[this.props.selectedEventId][this.props.status].map((val) => (
                            <ListItem divider={true}>
                                <Request requestData={val} accept={this.acceptRequest} invoice={this.generateInvoice} status={this.props.status}/>
                            </ListItem>
                        ))}
                    </>
                    }
                </List>
                <p style={{ textAlign: 'center', color: Colors.lightGrey }}>no more data</p>
            </div>
        );
    }
}
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

const mapStateToProps = (state) => {
    console.log("propppppp", state);

    return {
        events: state.events,
        status: state.status,
        data: state.data,
        selectedEventId: state.selectedEventId


    }
}

const mapDispatchToProps = { setTab, setEvent, acceptRequest, generateInvoice }


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)