import notFoundImage from './assets/404.svg';
import Header from './components/Header/Header';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { desktop, mobile } from './Me/styles/shared/devices';

const StyleImage = styled.div`
  @media ${desktop} {
    padding: 20px;
  }

  .imge {
    max-width: 35vw;
    max-height: 35vh;
  }
`;

const Content = styled.div`
  .container {
    padding-right: 15px;
    padding-left: 15px;

    @media ${mobile} {
      padding-top: 15px;
    }

    @media ${desktop} {
      padding-top: 15vh;
    }
  }

  .row {
    @media ${desktop} {
      display: inline-grid;
      grid-template-columns: auto auto;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.5rem;
  }
`;

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page not found | CodingCoach</title>
      </Helmet>
      <Header />
      <Content>
        <div className="container py-16 blog-content md:flex md:py-64">
          <div className="row">
            <div className="col">
              <StyleImage>
                <img src={notFoundImage} alt="" className="imge" />
              </StyleImage>
            </div>
            <div className="col">
              <h1>Not Found</h1>
              <p>
                You just hit a route that doesn't exist... What can you do now?
                That's a good question! There are several things you can do,
                going to <Link to="/">home page</Link> would be a good idea. You
                might want to{' '}
                <a href="https://codingcoach.io/blog">read the blog</a>, we have
                very interesting articles and tutorials!
              </p>
              <p>
                How did you get here? Is this a broken link out there? Please{' '}
                <a href="mailto:admin@codingcoach.io">let us know</a> and we
                will fix it ASAP!
              </p>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};

export default PageNotFound;
