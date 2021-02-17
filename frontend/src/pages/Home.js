import React from 'react'



class Home extends React.Component {
    render () {
        return (
      /*      <StyledContainer>
                <StyledMainSection>
                    <Route exact path="/" component={PostList} />
                    <Route 
                        exact 
                        path="/c/:category"
                        render={({ match }) => <PostList category={match.params.category} />}
                    />
                    <Route 
                        exact
                        path="/u/:username"
                        render={({ match }) => <PostList username={match.params.username}/>}
                    />
                    <Route 
                        exact
                        path="/c/:category/:post"
                        render={({ match, history }) => <PostDetail id={match.params.post} history={history}/>}
                    />
                </StyledMainSection>
                <Sidebar />
            </StyledContainer>  */
            <div>HOME PAGE</div>
        )
    }
}

export default Home