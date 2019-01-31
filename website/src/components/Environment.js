import React, { Component } from "react";
import PropTypes from "prop-types";
import EnvironmentLarge from "./EnvironmentLarge";
import EnvironmentSmall from "./EnvironmentSmall";
import Bundle from "./Bundle";
import SmallScreen from "./SmallScreen";
import Loading from "./Loading";
import { Redirect } from "react-router-dom";

const envData = {
  docs: require("bundle-loader?lazy!../Docs")
};

class Environment extends Component {
  static propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        environment: PropTypes.string
      })
    })
  };

  componentDidMount() {
    this.preload();
  }

  preload() {
    Object.keys(envData).forEach(key => envData[key](() => {}));
  }

  render() {
    const {
      history,
      location,
      match,
      match: {
        params: { environment }
      }
    } = this.props;
    if (!envData[environment]) {
      return <Redirect to="/" />;
    } else {
      return (
        <SmallScreen>
          {isSmallScreen => (
            <Bundle name="Environment" load={envData[environment]}>
              {data =>
                data ? (
                  isSmallScreen ? (
                    <EnvironmentSmall
                      data={data}
                      match={match}
                      location={location}
                      history={history}
                    />
                  ) : (
                    <EnvironmentLarge data={data} match={match} />
                  )
                ) : (
                  <Loading />
                )
              }
            </Bundle>
          )}
        </SmallScreen>
      );
    }
  }
}

export default Environment;
