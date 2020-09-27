
// Listen Sumit Event :

const divTweetLst = document.getElementById('id-tweet-lst')

eventListnerSubmitBtn();
eventListnerRemoveTweet();
loadFromLocalStorage();

function eventListnerSubmitBtn() {
    document.querySelector('#id-tweet-form').addEventListener('submit', newTweet);
}
function eventListnerRemoveTweet() {
    divTweetLst.addEventListener('click', removeTweet);
}

function newTweet(e) {
    e.preventDefault();

    const tweet = document.getElementById('id-tweet').value;

    const IsDuplicate = CheckDuplicate(tweet);

    if (tweet.length > 1 && !IsDuplicate) {
        const removeTweetLst = document.createElement('a');
        removeTweetLst.classList = 'remove-tweet'
        removeTweetLst.textContent = 'X'

        const tweetList = document.createElement('li');
        tweetList.textContent = tweet;
        tweetList.appendChild(removeTweetLst);

        divTweetLst.appendChild(tweetList);

        addTweetLocalStorage(tweet)
        this.reset();
    }
}

function CheckDuplicate(tweet) {
    let tweets = getTweetFromLocalStorage();

    for (tweetls of tweets) {
        if (tweetls == tweet) {
            return true;
        }
    }
    return false
}

function removeTweet(e) {

    if (e.target.classList.contains('remove-tweet')) {
        e.target.parentElement.remove();

        const tweet = e.target.parentElement.textContent;
        removeTweetLocalStorage(tweet)
    }
}

function addTweetLocalStorage(tweet) {

    let tweets = getTweetFromLocalStorage()
    tweets.push(tweet);
    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getTweetFromLocalStorage() {

    let tweets;
    const tweetsLS = localStorage.getItem('tweets');

    if (tweetsLS === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(tweetsLS);
    }

    return tweets;
}

function loadFromLocalStorage() {

    let tweets = getTweetFromLocalStorage();

    tweets.forEach(function (tweet) {

        const removeTweetLst = document.createElement('a');
        removeTweetLst.classList = 'remove-tweet'
        removeTweetLst.textContent = 'X'

        const tweetList = document.createElement('li');
        tweetList.textContent = tweet;
        tweetList.appendChild(removeTweetLst);

        divTweetLst.appendChild(tweetList);

    });

}

function removeTweetLocalStorage(tweet) {

    let tweets = getTweetFromLocalStorage();
    const delTweet = tweet.substring(0, tweet.length - 1)

    tweets.forEach(function (tweetls, index) {
        if (tweetls === delTweet)
            tweets.splice(index, 1)
    });
    localStorage.setItem('tweets', JSON.stringify(tweets))
}