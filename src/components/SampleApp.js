import React from 'react';
import Header from './Header';
import HomeSection from './HomeSection';
import FooterSection from './FooterSection';

class SampleApp extends React.Component {
  state = {
    options: [],
    // selectedOption: undefined,
  };

  componentDidMount() {
    console.log('componentDidMount');
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (ex) {
      //do nothing
    }
  }
  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate');
    if (prevState.options.length != this.state.options) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'App Name';
    const subTitle = <div>Your Subtitle here.</div>;
    const footerTitle = 'App Name';
    const copyRightText = (
      <div>copyright &copy; {new Date().getFullYear()} - [company name]</div>
    );
    return (
      <div>
        <Header title={title} />
        <HomeSection subtitle={subTitle} />
        <FooterSection
          footerTitle={footerTitle}
          copyRightText={copyRightText}
        />
      </div>
    );
  }
}

// Stateless functional component
SampleApp.defaultProps = {
  options: [],
};

export default SampleApp;



