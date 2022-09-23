const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="Chia Fruit Shake" />
                <div>
                  Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
              </div>
              <a href="/places">
                  <button className="btn-primary">Places Page</button>
              </a>
          </main>
        </Def>
    )
}

module.exports = home
