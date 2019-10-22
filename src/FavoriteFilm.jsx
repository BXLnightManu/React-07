import React, { Component } from 'react';

export class FavoriteFilm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            poster: '',
            comment: '',
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    submitForm(e) {
        e.preventDefault();
        const config = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
          };
        
        const url = "http://campus-bordeaux.ovh:3001/api/quests/movies/";
        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error);
                } else {
                    alert(`Le film a été correctement ajouté avec l'ID ${res}!`);
                }
            }).catch(e => {
                console.error(e);
                alert('Erreur');
            });
    };
    render() {
        return (
            <div className="FormEmployee">
                <h1> My film</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="filmname">Name of the film</label>
                            <input
                                type="text"
                                id="filmname"
                                name="name"
                                onChange={this.onChange}
                                value={this.state.name}
                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="poster">Poster link</label>
                            <input
                                type="url"
                                id="posterlink"
                                name="poster"
                                onChange={this.onChange}
                                value={this.state.poster}
                            />
                        </div>
                        <div className="form-data">
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                type="text"
                                id="comment"
                                name="comment"
                                rows="5"
                                cols="40"
                                onChange={this.onChange}
                                value={this.state.comment}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
};