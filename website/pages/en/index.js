/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <svg version="1.1" x="0px" y="0px" viewBox="280 300 200 200" className="chaos-svg">

        <filter xmlns="http://www.w3.org/2000/svg" y="-0.25" height="1.5" style={{colorInterpolationFilters: 'sRGB'}} id="filter1115">
      <feGaussianBlur stdDeviation="5" result="result6" id="feGaussianBlur1105"/>
      <feComposite result="result8" in="SourceGraphic" operator="atop" in2="result6" id="feComposite1107"/>
      <feComposite result="result9" operator="over" in2="SourceAlpha" in="result8" id="feComposite1109"/>
      <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0 " result="result10" id="feColorMatrix1111"/>
      <feBlend in="result10" mode="normal" in2="result6" id="feBlend1113"/>
    </filter>

          <path id="chaos-path" strokeDasharray="1200 1000" d="m 380.20898,317.64258 c -13.16958,0 -25.55857,2.80113 -36.59375,7.82812 h 73.45899 c -11.15069,-5.07861 -23.64782,-7.82812 -36.86524,-7.82812 z m -44.17187,11.75 c -6.6494,3.87932 -12.68536,8.61933 -17.95508,14.07031 h 34.4668 c 8.22816,-3.90209 17.49108,-6.07617 27.36914,-6.07617 10.05513,0 19.36535,2.07067 27.68359,6.07617 h 34.83203 c -5.24151,-5.5008 -11.22811,-10.22245 -17.79882,-14.07031 z m -21.50781,17.99023 c -3.61023,4.24943 -6.78778,8.86241 -9.46875,13.78321 h 25.3457 c 4.23115,-5.39967 9.33218,-10.05441 15.10547,-13.78321 z m 99.96484,0 c 5.52364,3.64573 10.50717,8.25289 14.85352,13.78321 h 25.89453 c -2.65771,-4.96131 -5.78216,-9.56576 -9.30664,-13.78321 z m -111.42187,17.70508 c -2.90574,6.09981 -5.08747,12.61071 -6.41211,19.44336 h 22.29687 c 1.79644,-7.06578 4.74093,-13.61102 8.61914,-19.44336 z m 129.14453,0 c 0.99284,1.45673 1.9524,2.96054 2.86523,4.52539 h 24.09766 c -0.61584,-1.53958 -1.28567,-3.04204 -1.98242,-4.52539 z m -110.26368,12.81055 v 26.63672 h 4.625 c 0.0653,-3.23847 0.57864,-5.26667 1.85547,-7.00782 1.8693,-2.67932 5.04777,-4.23828 8.53711,-4.23828 3.30242,0 6.41763,1.43478 8.22461,3.74024 1.46563,1.80383 2.15915,4.12865 2.2793,7.50586 h 4.60937 c -0.12877,-4.51252 -1.05422,-7.70477 -2.90039,-10.18555 -2.5547,-3.36473 -6.85487,-5.29688 -11.77734,-5.29688 -4.67323,0 -8.53634,1.86965 -10.8418,5.23438 v -16.38867 z m -25.95703,10.55468 c -0.56066,3.8928 -0.85546,7.87624 -0.85547,11.93555 0,1.39331 0.0442,2.77308 0.10938,4.14649 h 21.77539 c -0.0652,-1.18102 -0.10937,-2.36812 -0.10937,-3.56641 0,-4.29857 0.409,-8.47918 1.17382,-12.51563 z m 80.56446,0.59961 c -9.37724,0 -16.63625,6.51445 -17.77149,15.48243 h 4.6875 c 1.02675,-6.38517 6.52803,-11.2461 13.20899,-11.2461 6.73148,0 12.13469,4.75251 13.14843,11.2461 h 4.79688 v -14.67188 h -4.61133 v 6.04297 c -3.36473,-4.73554 -7.53956,-6.85352 -13.45898,-6.85352 z m 42.53125,0 c -9.3538,0 -16.71664,6.58432 -17.74805,15.48243 h 4.72461 c 0.99622,-6.55785 6.24679,-11.2461 13.02344,-11.2461 6.65496,0 11.76968,4.64615 12.8164,11.2461 h 4.71875 c -1.0855,-9.10705 -8.14468,-15.48243 -17.53515,-15.48243 z m 32.29492,0 c -5.54557,0 -9.65625,4.05014 -9.65625,9.59571 0,2.3211 0.80439,4.35133 2.3418,5.88672 h 9.67968 c -2.48184,-1.02603 -3.46534,-1.45142 -4.23437,-1.83594 -2.11853,-1.05927 -3.11524,-2.49242 -3.11524,-4.48633 0,-2.74163 2.1822,-4.92383 4.92383,-4.92383 2.99087,0 4.73514,1.74622 4.98438,4.98633 h 4.67187 c -0.18693,-5.48326 -4.11244,-9.22266 -9.5957,-9.22266 z m -155.86719,19.4043 c 0.44334,4.75708 1.26973,9.38156 2.45703,13.84375 h 22.59961 c -1.56534,-4.40516 -2.65025,-9.04128 -3.21289,-13.84375 z m 26.43359,0 v 15.48828 h 4.61133 v -15.48828 z m 25.54688,0 v 15.48828 h 4.61133 v -15.48828 z m 11.18555,0 c 0.70985,9.41397 8.22713,16.29883 18.18554,16.29883 5.79481,0 9.53448,-1.93085 13.14844,-6.79102 v 5.98047 h 4.61133 v -15.48828 h -4.7168 c -0.77603,6.88859 -6.18089,12.0625 -12.98047,12.0625 -7.12817,0 -12.70458,-5.14972 -13.52734,-12.0625 z m 42.60351,0 c 0.81517,9.54183 8.19345,16.29883 18.17774,16.29883 9.48672,0 16.58873,-6.83278 17.25586,-16.29883 h -4.66797 c -0.60051,7.06091 -5.74885,12.0625 -12.71289,12.0625 -7.29853,0 -12.65283,-4.95758 -13.3711,-12.0625 z m 50.25782,0 c 1.5505,0.6531 2.7299,1.25256 3.45507,1.71875 1.37082,0.93465 2.17969,2.55454 2.17969,4.42383 0,3.42704 -2.43,5.91992 -5.73242,5.91992 -3.8009,0 -6.16873,-2.43071 -6.41797,-6.60547 h -4.54687 c 0.0622,6.60484 4.42231,10.8418 10.96484,10.8418 6.10636,0 10.40625,-4.36082 10.40625,-10.5918 0,-2.28957 -0.58491,-4.1837 -1.76758,-5.70703 z M 299.12305,426.2207 c 1.27011,3.96795 2.84047,7.78742 4.66601,11.45313 h 24.80469 c -2.53715,-3.56048 -4.71565,-7.39226 -6.47461,-11.45313 z m 135.95898,7.26563 c -1.09205,1.45607 -2.17939,2.84641 -3.26367,4.1875 h 25.37891 c 0.74665,-1.35524 1.4893,-2.69765 2.27343,-4.1875 z m -129.21484,8.10937 c 2.63927,4.64297 5.72743,8.99047 9.20312,13.00586 h 31.5586 c -5.6798,-3.53512 -10.74538,-7.92443 -15.00782,-13.00586 z m 122.64453,0 c -4.72889,5.36571 -9.45601,9.6495 -14.36719,13.00586 h 32.02735 c 2.98019,-3.64763 5.80317,-7.81579 8.82617,-13.00586 z m -109.81641,16.92578 c 5.34768,5.41979 11.46796,10.11516 18.21289,13.94727 h 88.04883 c 3.31418,-1.93282 6.50664,-4.08188 9.54492,-6.46484 3.04607,-2.43686 5.72292,-4.85364 8.21875,-7.48243 h -35.24804 c -7.97923,3.95332 -16.6228,5.74024 -26.6836,5.74024 -9.62414,0 -18.68855,-2.06309 -26.81054,-5.74024 z m 26.01953,17.86914 c 11.12831,4.90203 23.62392,7.61329 36.94532,7.61329 12.68306,0 24.76067,-2.64925 35.70703,-7.61329 z"/>
        </svg>
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/chaos_logo.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href="https://occultist.io/">Occultist</Button>
            <Button href="https://github.com/chaos-lang/chaos">GitHub</Button>
            <Button href={docUrl('01_installation')}>Get Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const InfluencedBy = () => (
      <div
        className="productShowcaseSection paddingBottom"
        style={{textAlign: 'center'}}>
        <h2>Influenced by</h2>
        <ul style={{textAlign: 'left', width: '45%', margin: 'auto'}}>
          <li>TypeScript's type safety</li>
          <li>Python's syntax, modules and integrity</li>
          <li>JavaScript's availability</li>
          <li>Ruby's loops and blocks</li>
          <li>PHP's dedication to server-side</li>
          <li>Haskell's immutability</li>
          <li>C's speed</li>
          <li>NumPy's matrix arithmetics</li>
          <li>Perl's regex engine</li>
        </ul>
      </div>
    );

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Features1 = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'There are no control structures. (no `if..else`, no `switch..case`) Decision making only possible on function returns.',
            image: `${baseUrl}img/process.svg`,
            imageAlign: 'top',
            title: 'Zero Cyclomatic Complexity',
          },
          {
            content: 'A single unit test is enough to have **100% coverage** on functions, **always**.',
            image: `${baseUrl}img/lab.svg`,
            imageAlign: 'top',
            title: 'Always 100% Coverage',
          },
          {
            content: 'Chaos language is **not object-oriented**. So everything is done by functions and data types.',
            image: `${baseUrl}img/function.svg`,
            imageAlign: 'top',
            title: 'Functional',
          },
        ]}
      </Block>
    );

    const Features2 = () => (
      <Block layout="threeColumn">
        {[
          {
            content: 'Every variable in Chaos language is **immutable by default**.',
            image: `${baseUrl}img/padlock.svg`,
            imageAlign: 'top',
            title: 'Immutability Everywhere',
          },
          {
            content: 'Language\'s itself forces you to write **less error-prone code**.',
            image: `${baseUrl}img/warrior.svg`,
            imageAlign: 'top',
            title: 'Discipline',
          },
          {
            content: 'Chaos language is highly extensible via Chaos C extensions.',
            image: `${baseUrl}img/socket.svg`,
            imageAlign: 'top',
            title: 'Modularity & Extensibility',
          },
        ]}
      </Block>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features1 />
          <Features2 />
          <InfluencedBy />
        </div>
      </div>
    );
  }
}

module.exports = Index;
