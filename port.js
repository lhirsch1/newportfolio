// const axios = require("axios");



// axios
//     .get('http://api.openweathermap.org/data/2.5/weather?q=minneapolis&appid=3b769af740b91883e455afbf50886509')
//     .then(function(res){
//         console.log(res)}
//     );

$(document).ready(function () {

    const projects = [
        {
            title: `BrewBuzz`,
            subtitle: `Craft Brewing Culture Connector`,
            text: `Find and review breweries near you or across the country`,
            image: `./images/brewbuzz_demo.gif`,
            link: `https://www.brewbuzz.beer`
        },
        {
            title: `SquigglePig`,
            subtitle: `Multiplayer Drawing Game`,
            text: `Grab some friends and start drawing!`,
            link: `https://radiant-escarpment-81079.herokuapp.com/`
        },
        {
            title: `No Capes`,
            subtitle: `Micro-charitability app`,
            text: `Complete small acts of charity in Minneapolis to earn badges and points!`,
            link: `https://radiant-escarpment-81079.herokuapp.com/`
        },
        {
            title: `Desolation in Isolation`,
            subtitle: `Online Film Club`,
            text: `An online film club showcasing tragically amatuer
            post-apocalyptic films from the 1970's and 1980's`,
            link: `https://lhirsch1.github.io/isodesolation`
        },
       
    ]



    console.log(projects.length);
    const content = $(`.content`)
    for (let i = 0; i < projects.length; i++) {
        const colSm6 = $(`<div class='col-sm'>`);
        const card = $(`<div class='card'>`);
        const cardBody = $(`<div class='card-body'>`);
        const cardTitle = $(`<h5 class='card-title'>`);
        const cardSubTitle = $(`<h6 class='card-subtitle mb-2 text-muted'>`);
        const cardText = $(`<p class="card-text">`);
        const cardLink = $(`<a class='card-link'>`);
        console.log("link",projects[i].link )

        cardTitle.text(projects[i].title);
            cardSubTitle.text(projects[i].subtitle);
            cardText.text(projects[i].text);
            cardBody.append(cardLink, cardSubTitle, cardText);
            cardLink.text(projects[i].title);
            cardLink.attr('href', `${projects[i].link}`)
            card.append(cardBody);
            colSm6.append(card)
        if (i % 2 === 0) {
            const row = $(`<div class='row${i}'>`);
            row.append(colSm6);
            content.append(row)
        }
        else{
            const row = $(`.row${i-1}`);
            row.append(colSm6);
            content.append(row)
        }
    }


   


    // < div class="row" >
    //     <div class="col-sm-6">
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-body">
    //                 <h5 class="card-title">No Capes</h5>
    //                 <h6 class="card-subtitle mb-2 text-muted"></h6>
    //                 <p class="card-text"></p>
    //                 <a href="https://lhirsch1.github.io/isodesolation" class="card-link">Link</a>
    //             </div>
    //         </div>
    //     </div>
    //     <div class="col-sm-6">
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-body">
    //                 <h5 class="card-title">Desolation in Isolation</h5>
    //                 <h6 class="card-subtitle mb-2 text-muted">Online Film Club</h6>
    //                 <p class="card-text">An online film club showcasing tragically amatuer
    //                                     post-apocalyptic films from the 1970's and 1980's </p>
    //                 <a href="https://lhirsch1.github.io/isodesolation" class="card-link">Link</a>
    //             </div>
    //         </div>
    //     </div>
    //     <!-- < div class="col-sm-6" >
    //         <div class="card" style="width: 18rem;">
    //             <div class="card-body">
    //                 <h5 class="card-title">whatsOn</h5>
    //                 <h6 class="card-subtitle mb-2 text-muted">Video Streaming Companion</h6>
    //                 <p class="card-text">Get movie recommendations based on your video streaming
    //                                     subscriptions</p>
    //                 <a href="https://lhirsch1.github.io/whatsOn/" class="">Link</a>
    //             </div>
    //         </div>
    // </div > -->
    //                 </div >

    console.log('howdy')


})