@extends('layouts.master' , ['head_space'=>'header-spacer-small'])

@section('content')
<!-- Main Header Account -->

<div class="main-header">
    <div class="content-bg-wrap bg-account"></div>
    <div class="container">
        <div class="row">
            <div class="col col-lg-8 m-auto col-md-8 col-sm-12 col-12">
                <div class="main-header-content">
                    <h1>Your Account Dashboard</h1>
                    <p>Welcome to your account dashboard! Here you’ll find everything you need to change your profile
                        information, settings, read notifications and requests, view your latest messages, change your pasword and much
                        more! Also you can create or manage your own favourite page, have fun!</p>
                </div>
            </div>
        </div>
    </div>
    <img class="img-bottom" src="img/account-bottom.png" alt="friends">
</div>

<!-- ... end Main Header Account -->


<!-- Your Account Personal Information -->

<div class="container">
    <div class="row">
        <div class="col col-xl-9 order-xl-2 col-lg-9 order-lg-2 col-md-12 order-md-1 col-sm-12 col-12">
            <div class="ui-block">
                <div class="ui-block-title">
                    <h6 class="title">Personal Information</h6>
                </div>
                <div class="ui-block-content">

                    <!-- Personal Information Form  -->

                    <form method="POST" action="{{url('users/'. $user->id)}}">
                        @csrf
                        <input type="hidden" value="put" name="_method">
                        <div class="row">

                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">Name</label>
                                    <input name="name" class="form-control" placeholder="" type="text" value="{{$user->name}}">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Email</label>
                                    <input name="email" class="form-control" placeholder="" type="email" value="{{$user->email}}">
                                </div>

                                <div class="form-group date-time-picker label-floating">
                                    <label class="control-label">Your Birthday</label>
                                    <input name="datetimepicker" value="10/24/1984" />
                                    <span class="input-group-addon">
															<svg class="olymp-month-calendar-icon icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-month-calendar-icon"></use></svg>
														</span>
                                </div>
                            </div>

                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">Last Name</label>
                                    <input class="form-control" placeholder="" type="text" value="Spiegel">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Website</label>
                                    <input class="form-control" placeholder=""  value="daydreamzagency.com">
                                </div>


                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Your Phone Number</label>
                                    <input class="form-control" placeholder="" type="text">
                                </div>
                            </div>

                            <div class="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Your Country</label>
                                    <select class="selectpicker form-control">
                                        <option value="US">United States</option>
                                        <option value="AU">Australia</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Your State / Province</label>
                                    <select class="selectpicker form-control">
                                        <option value="CA">California</option>
                                        <option value="TE">Texas</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-lg-4 col-md-4 col-sm-12 col-12">
                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Your City</label>
                                    <select class="selectpicker form-control">
                                        <option value="SF">San Francisco</option>
                                        <option value="NY">New York</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating">
                                    <label class="control-label">Write a little description about you</label>
                                    <textarea class="form-control" placeholder="">Hi, I’m James, I’m 36 and I work as a Digital Designer for the  “Daydreams” Agency in Pier 56</textarea>
                                </div>

                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Your Gender</label>
                                    <select name="gender" class="selectpicker form-control">
                                        <option value="m">Male</option>
                                        <option value="f">Female</option>
                                    </select>
                                </div>

                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Religious Belifs</label>
                                    <input class="form-control" placeholder="" type="text">
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="form-group label-floating is-empty">
                                    <label class="control-label">Your Birthplace</label>
                                    <input class="form-control" placeholder="" type="text">
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Your Occupation</label>
                                    <input class="form-control" placeholder="" type="text" value="UI/UX Designer">
                                </div>

                                <div class="form-group label-floating is-select">
                                    <label class="control-label">Status</label>
                                    <select class="selectpicker form-control">
                                        <option value="MA">Married</option>
                                        <option value="FE">Not Married</option>
                                    </select>
                                </div>

                                <div class="form-group label-floating">
                                    <label class="control-label">Political Incline</label>
                                    <input class="form-control" placeholder="" type="text" value="Democrat">
                                </div>
                            </div>
                            <div class="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Facebook Account</label>
                                    <input class="form-control" type="text" value="www.facebook.com/james-spiegel95321">
                                    <i class="fab fa-facebook-f c-facebook" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Twitter Account</label>
                                    <input class="form-control" type="text" value="www.twitter.com/james_spiegelOK">
                                    <i class="fab fa-twitter c-twitter" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Your RSS Feed Account</label>
                                    <input class="form-control" type="text">
                                    <i class="fa fa-rss c-rss" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating">
                                    <label class="control-label">Your Dribbble Account</label>
                                    <input class="form-control" type="text" value="www.dribbble.com/thecowboydesigner">
                                    <i class="fab fa-dribbble c-dribbble" aria-hidden="true"></i>
                                </div>
                                <div class="form-group with-icon label-floating is-empty">
                                    <label class="control-label">Your Spotify Account</label>
                                    <input class="form-control" type="text">
                                    <i class="fab fa-spotify c-spotify" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <button class="btn btn-secondary btn-lg full-width">Restore all Attributes</button>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <button class="btn btn-primary btn-lg full-width">Save all Changes</button>
                            </div>
                            <div class="col col-lg-6 col-md-6 col-sm-12 col-12">
                                <input type="submit" class="btn btn-breez" value="Update">
                            </div>

                        </div>
                    </form>

                    <!-- ... end Personal Information Form  -->
                </div>
            </div>
        </div>

        <div class="col col-xl-3 order-xl-1 col-lg-3 order-lg-1 col-md-12 order-md-2 col-sm-12 col-12 responsive-display-none">
            <div class="ui-block">

                <!-- Your Profile  -->

                <div class="your-profile">
                    <div class="ui-block-title ui-block-title-small">
                        <h6 class="title">Your PROFILE</h6>
                    </div>

                    <div id="accordion" role="tablist" aria-multiselectable="true">
                        <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                                <h6 class="mb-0">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Profile Settings
                                        <svg class="olymp-dropdown-arrow-icon"><use xlink:href="svg-icons/sprites/icons.svg#olymp-dropdown-arrow-icon"></use></svg>
                                    </a>
                                </h6>
                            </div>

                            <div id="collapseOne" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                                <ul class="your-profile-menu">
                                    <li>
                                        <a href="28-YourAccount-PersonalInformation.html">Personal Information</a>
                                    </li>
                                    <li>
                                        <a href="29-YourAccount-AccountSettings.html">Account Settings</a>
                                    </li>
                                    <li>
                                        <a href="30-YourAccount-ChangePassword.html">Change Password</a>
                                    </li>
                                    <li>
                                        <a href="31-YourAccount-HobbiesAndInterests.html">Hobbies and Interests</a>
                                    </li>
                                    <li>
                                        <a href="32-YourAccount-EducationAndEmployement.html">Education and Employement</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="ui-block-title">
                        <a href="33-YourAccount-Notifications.html" class="h6 title">Notifications</a>
                        <a href="#" class="items-round-little bg-primary">8</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="34-YourAccount-ChatMessages.html" class="h6 title">Chat / Messages</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="35-YourAccount-FriendsRequests.html" class="h6 title">Friend Requests</a>
                        <a href="#" class="items-round-little bg-blue">4</a>
                    </div>
                    <div class="ui-block-title ui-block-title-small">
                        <h6 class="title">FAVOURITE PAGE</h6>
                    </div>
                    <div class="ui-block-title">
                        <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Create Fav Page</a>
                    </div>
                    <div class="ui-block-title">
                        <a href="36-FavPage-SettingsAndCreatePopup.html" class="h6 title">Fav Page Settings</a>
                    </div>
                </div>

                <!-- ... end Your Profile  -->

            </div>
        </div>
    </div>
</div>

<!-- ... end Your Account Personal Information -->

@endsection