@extends('layouts.master' , ['head_space'=>'header-spacer-small'])

@section('content')

    <!-- Top Header-Profile -->

    <div class="container">
        <div class="row">
            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="ui-block">
                    <div class="top-header">
                        <div class="top-header-thumb">
                            <img src="http://api.pasho/storage/profile-covers/1.jpg" alt="nature">
                        </div>
                        <div class="profile-section">
                            <div class="row">
                                <div class="col col-lg-5 col-md-5 col-sm-12 col-12">
                                    <ul class="profile-menu">
                                        <li>
                                            <a href="02-ProfilePage.html" class="active">Timeline</a>
                                        </li>
                                        <li>
                                            <a href="05-ProfilePage-About.html">About</a>
                                        </li>
                                        <li>
                                            <a href="06-ProfilePage.html">Friends</a>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col col-lg-5 ml-auto col-md-5 col-sm-12 col-12">
                                    <ul class="profile-menu">
                                        <li>
                                            <a href="07-ProfilePage-Photos.html">Photos</a>
                                        </li>
                                        <li>
                                            <a href="09-ProfilePage-Videos.html">Videos</a>
                                        </li>
                                        <li>
                                            <div class="more">
                                                <svg class="olymp-three-dots-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use></svg>
                                                <ul class="more-dropdown more-with-triangle">
                                                    <li>
                                                        <a href="#">Report Profile</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Block Profile</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="control-block-button">
                                <a href="35-YourAccount-FriendsRequests.html" class="btn btn-control bg-blue">
                                    <svg class="olymp-happy-face-icon"><use xlink:href="{{url('svg-icons/sprites/icons.svg#olymp-happy-face-icon')}}"></use></svg>
                                </a>

                                <a href="#" class="btn btn-control bg-purple">
                                    <svg class="olymp-chat---messages-icon"><use xlink:href="{{url('svg-icons/sprites/icons.svg#olymp-chat---messages-icon')}}"></use></svg>
                                </a>

                                <div class="btn btn-control bg-primary more">
                                    <svg class="olymp-settings-icon"><use xlink:href="{{url('svg-icons/sprites/icons.svg#olymp-settings-icon')}}"></use></svg>

                                    <ul class="more-dropdown more-with-triangle triangle-bottom-right">
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Profile Photo</a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#update-header-photo">Update Header Photo</a>
                                        </li>
                                        <li>
                                            <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="top-header-author">
                            <a href="02-ProfilePage.html" class="author-thumb">
                                <img src="http://api.pasho/storage/profile-pictures/1.jpg" alt="author">
                            </a>
                            <div class="author-content">
                                <a href="02-ProfilePage.html" class="h4 author-name">James Spiegel</a>
                                <div class="country">San Francisco, CA</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- ... end Top Header-Profile -->
    <div class="container">
        <div class="row">

            <!-- Main Content -->

            <div class="col col-xl-12 order-xl-1 col-lg-12 order-lg-1 col-md-12 col-sm-12 col-12">
                <div id="newsfeed-items-grid">

                    <div class="ui-block">
                        <!-- Post -->

                        <article class="hentry post">

                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            19 hours ago
                                        </time>
                                    </div>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                    </svg>
                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="#">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Turn Off Notifications</a>
                                        </li>
                                        <li>
                                            <a href="#">Select as Featured</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque.
                            </p>

                            <div class="post-additional-info inline-items">

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>8</span>
                                </a>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic9.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic11.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>

                                <div class="names-people-likes">
                                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                    <br>6 more liked this
                                </div>


                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>17</span>
                                    </a>

                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-share-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                        </svg>
                                        <span>24</span>
                                    </a>
                                </div>


                            </div>

                            <div class="control-block-button post-control-button">

                                <a href="#" class="btn btn-control featured-post">
                                    <svg class="olymp-trophy-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-trophy-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-like-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-share-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                    </svg>
                                </a>

                            </div>

                        </article>

                        <!-- .. end Post -->				</div>
                    <div class="ui-block">

                        <!-- Post -->

                        <article class="hentry post video">

                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a> shared a
                                    <a href="#">link</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            7 hours ago
                                        </time>
                                    </div>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                    </svg>
                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="#">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Turn Off Notifications</a>
                                        </li>
                                        <li>
                                            <a href="#">Select as Featured</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <p>If someone missed it, check out the new song by System of a Revenge! I thinks they are going back to their roots...</p>

                            <div class="post-video">
                                <div class="video-thumb">
                                    <img src="img/video5.jpg" alt="photo">
                                    <a href="../../https@youtube.com/watch@v=excVFQ2TWig" class="play-video">
                                        <svg class="olymp-play-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-play-icon"></use>
                                        </svg>
                                    </a>
                                </div>

                                <div class="video-content">
                                    <a href="#" class="h4 title">System of a Revenge - Nothing Else Matters (LIVE)</a>
                                    <p>Lorem ipsum dolor sit amet, consectetur ipisicing elit, sed do eiusmod tempo incididunt ut labore..</p>
                                    <a href="#" class="link-site">YOUTUBE.COM</a>
                                </div>
                            </div>

                            <div class="post-additional-info inline-items">

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>15</span>
                                </a>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic9.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic11.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>

                                <div class="names-people-likes">
                                    <a href="#">Jenny</a>, <a href="#">Robert</a> and
                                    <br>13 more liked this
                                </div>

                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>1</span>
                                    </a>

                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-share-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                        </svg>
                                        <span>16</span>
                                    </a>
                                </div>


                            </div>

                            <div class="control-block-button post-control-button">

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-like-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-share-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                    </svg>
                                </a>

                            </div>

                        </article>

                        <!-- .. end Post -->				</div>
                    <div class="ui-block">
                        <!-- Post -->

                        <article class="hentry post">

                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            2 hours ago
                                        </time>
                                    </div>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                    </svg>
                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="#">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Turn Off Notifications</a>
                                        </li>
                                        <li>
                                            <a href="#">Select as Featured</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
                            </p>

                            <div class="post-additional-info inline-items">

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>36</span>
                                </a>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic9.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic11.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>

                                <div class="names-people-likes">
                                    <a href="#">You</a>, <a href="#">Elaine</a> and
                                    <br>34 more liked this
                                </div>


                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>17</span>
                                    </a>

                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-share-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                        </svg>
                                        <span>24</span>
                                    </a>
                                </div>


                            </div>

                            <div class="control-block-button post-control-button">

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-like-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-share-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                    </svg>
                                </a>

                            </div>

                        </article>

                        <!-- .. end Post -->
                        <!-- Comments -->

                        <ul class="comments-list">
                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar10-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Elaine Dreyfuss</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                5 mins ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der doloremque laudantium.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>8</span>
                                </a>
                                <a href="#" class="reply">Reply</a>
                            </li>
                            <li class="comment-item has-children">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar5-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Green Goo Rock</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                1 hour ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugiten, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi en lod nesciunt. Neque porro
                                    quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur adipisci velit en lorem ipsum der.
                                </p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>5</span>
                                </a>
                                <a href="#" class="reply">Reply</a>

                                <ul class="children">
                                    <li class="comment-item">
                                        <div class="post__author author vcard inline-items">
                                            <img src="img/avatar8-sm.jpg" alt="author">

                                            <div class="author-date">
                                                <a class="h6 post__author-name fn" href="#">Diana Jameson</a>
                                                <div class="post__date">
                                                    <time class="published" datetime="2017-03-24T18:18">
                                                        39 mins ago
                                                    </time>
                                                </div>
                                            </div>

                                            <a href="#" class="more">
                                                <svg class="olymp-three-dots-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                </svg>
                                            </a>

                                        </div>

                                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                        <a href="#" class="post-add-icon inline-items">
                                            <svg class="olymp-heart-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                            </svg>
                                            <span>2</span>
                                        </a>
                                        <a href="#" class="reply">Reply</a>
                                    </li>
                                    <li class="comment-item">
                                        <div class="post__author author vcard inline-items">
                                            <img src="img/avatar2-sm.jpg" alt="author">

                                            <div class="author-date">
                                                <a class="h6 post__author-name fn" href="#">Nicholas Grisom</a>
                                                <div class="post__date">
                                                    <time class="published" datetime="2017-03-24T18:18">
                                                        24 mins ago
                                                    </time>
                                                </div>
                                            </div>

                                            <a href="#" class="more">
                                                <svg class="olymp-three-dots-icon">
                                                    <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                                </svg>
                                            </a>

                                        </div>

                                        <p>Excepteur sint occaecat cupidatat non proident.</p>

                                        <a href="#" class="post-add-icon inline-items">
                                            <svg class="olymp-heart-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                            </svg>
                                            <span>0</span>
                                        </a>
                                        <a href="#" class="reply">Reply</a>

                                    </li>
                                </ul>

                            </li>

                            <li class="comment-item">
                                <div class="post__author author vcard inline-items">
                                    <img src="img/avatar4-sm.jpg" alt="author">

                                    <div class="author-date">
                                        <a class="h6 post__author-name fn" href="#">Chris Greyson</a>
                                        <div class="post__date">
                                            <time class="published" datetime="2017-03-24T18:18">
                                                1 hour ago
                                            </time>
                                        </div>
                                    </div>

                                    <a href="#" class="more">
                                        <svg class="olymp-three-dots-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                        </svg>
                                    </a>

                                </div>

                                <p>Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>7</span>
                                </a>
                                <a href="#" class="reply">Reply</a>

                            </li>
                        </ul>

                        <!-- ... end Comments -->
                        <a href="#" class="more-comments">View more comments <span>+</span></a>

                        <!-- Comment Form  -->

                        <form class="comment-form inline-items">

                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="form-group with-icon-right ">
                                    <textarea class="form-control" placeholder=""></textarea>
                                    <div class="add-options-message">
                                        <a href="#" class="options-message" data-toggle="modal" data-target="#update-header-photo">
                                            <svg class="olymp-camera-icon">
                                                <use xlink:href="svg-icons/sprites/icons.svg#olymp-camera-icon"></use>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <button class="btn btn-md-2 btn-primary">Post Comment</button>

                            <button class="btn btn-md-2 btn-border-think c-grey btn-transparent custom-color">Cancel</button>

                        </form>

                        <!-- ... end Comment Form  -->				</div>
                    <div class="ui-block">
                        <!-- Post -->

                        <article class="hentry post has-post-thumbnail shared-photo">

                            <div class="post__author author vcard inline-items">
                                <img src="img/author-page.jpg" alt="author">

                                <div class="author-date">
                                    <a class="h6 post__author-name fn" href="02-ProfilePage.html">James Spiegel</a> shared
                                    <a href="#">Diana Jameson</a>’s <a href="#">photo</a>
                                    <div class="post__date">
                                        <time class="published" datetime="2017-03-24T18:18">
                                            7 hours ago
                                        </time>
                                    </div>
                                </div>

                                <div class="more">
                                    <svg class="olymp-three-dots-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-three-dots-icon"></use>
                                    </svg>
                                    <ul class="more-dropdown">
                                        <li>
                                            <a href="#">Edit Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Delete Post</a>
                                        </li>
                                        <li>
                                            <a href="#">Turn Off Notifications</a>
                                        </li>
                                        <li>
                                            <a href="#">Select as Featured</a>
                                        </li>
                                    </ul>
                                </div>

                            </div>

                            <p>Hi! Everyone should check out these amazing photographs that my friend shot the past week. Here’s one of them...leave a kind comment!</p>

                            <div class="post-thumb">
                                <img src="img/post-photo6.jpg" alt="photo">
                            </div>

                            <ul class="children single-children">
                                <li class="comment-item">
                                    <div class="post__author author vcard inline-items">
                                        <img src="img/avatar8-sm.jpg" alt="author">
                                        <div class="author-date">
                                            <a class="h6 post__author-name fn" href="#">Diana Jameson</a>
                                            <div class="post__date">
                                                <time class="published" datetime="2017-03-24T18:18">
                                                    16 hours ago
                                                </time>
                                            </div>
                                        </div>
                                    </div>

                                    <p>Here’s the first photo of our incredible photoshoot from yesterday. If you like it please say so and tel me what you wanna see next!</p>
                                </li>
                            </ul>

                            <div class="post-additional-info inline-items">

                                <a href="#" class="post-add-icon inline-items">
                                    <svg class="olymp-heart-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-heart-icon"></use>
                                    </svg>
                                    <span>15</span>
                                </a>

                                <ul class="friends-harmonic">
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic5.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic10.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic7.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic8.jpg" alt="friend">
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="img/friend-harmonic2.jpg" alt="friend">
                                        </a>
                                    </li>
                                </ul>

                                <div class="names-people-likes">
                                    <a href="#">Diana</a>, <a href="#">Nicholas</a> and
                                    <br>13 more liked this
                                </div>

                                <div class="comments-shared">
                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-speech-balloon-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-speech-balloon-icon"></use>
                                        </svg>
                                        <span>0</span>
                                    </a>

                                    <a href="#" class="post-add-icon inline-items">
                                        <svg class="olymp-share-icon">
                                            <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                        </svg>
                                        <span>16</span>
                                    </a>
                                </div>

                            </div>

                            <div class="control-block-button post-control-button">

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-like-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-like-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-comments-post-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-comments-post-icon"></use>
                                    </svg>
                                </a>

                                <a href="#" class="btn btn-control">
                                    <svg class="olymp-share-icon">
                                        <use xlink:href="svg-icons/sprites/icons.svg#olymp-share-icon"></use>
                                    </svg>
                                </a>

                            </div>

                        </article>

                        <!-- .. end Post -->				</div>
                </div>

                <a id="load-more-button" href="#" class="btn btn-control btn-more" data-load-link="items-to-load.html" data-container="newsfeed-items-grid">
                    <svg class="olymp-three-dots-icon">
                        <use xlink:href="{{url('svg-icons/sprites/icons.svg#olymp-three-dots-icon')}}"></use>
                    </svg>
                </a>
            </div>

            <!-- ... end Main Content -->


        </div>
    </div>

@endsection