
<nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
    <div class="container">
        <div class="navbar-translate">
            <a class="navbar-brand" href="../index.html">
                {{config('app.name')}} </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
                {{--<li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">apps</i> Components
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <a href="../presentation.html" class="dropdown-item">
                            <i class="material-icons">layers</i> Presentation
                        </a>
                        <a href="../index.html" class="dropdown-item">
                            <i class="material-icons">line_style</i> All Components
                        </a>
                        <a href="../../../demos.creative-tim.com/material-kit-pro/docs/2.1/getting-started/introduction.html" class="dropdown-item">
                            <i class="material-icons">content_paste</i> Documentation
                        </a>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">view_day</i> Sections
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <a href="../sections.html#headers" class="dropdown-item">
                            <i class="material-icons">dns</i> Headers
                        </a>
                        <a href="../sections.html#features" class="dropdown-item">
                            <i class="material-icons">build</i> Features
                        </a>
                        <a href="../sections.html#blogs" class="dropdown-item">
                            <i class="material-icons">list</i> Blogs
                        </a>
                        <a href="../sections.html#teams" class="dropdown-item">
                            <i class="material-icons">people</i> Teams
                        </a>
                        <a href="../sections.html#projects" class="dropdown-item">
                            <i class="material-icons">assignment</i> Projects
                        </a>
                        <a href="../sections.html#pricing" class="dropdown-item">
                            <i class="material-icons">monetization_on</i> Pricing
                        </a>
                        <a href="../sections.html#testimonials" class="dropdown-item">
                            <i class="material-icons">chat</i> Testimonials
                        </a>
                        <a href="../sections.html#contactus" class="dropdown-item">
                            <i class="material-icons">call</i> Contacts
                        </a>
                    </div>
                </li>
                <li class="dropdown nav-item">
                    <a href="#" class="dropdown-toggle nav-link" data-toggle="dropdown">
                        <i class="material-icons">view_carousel</i> Examples
                    </a>
                    <div class="dropdown-menu dropdown-with-icons">
                        <a href="about-us.html" class="dropdown-item">
                            <i class="material-icons">account_balance</i> About Us
                        </a>
                        <a href="blog-post.html" class="dropdown-item">
                            <i class="material-icons">art_track</i> Blog Post
                        </a>
                        <a href="blog-posts.html" class="dropdown-item">
                            <i class="material-icons">view_quilt</i> Blog Posts
                        </a>
                        <a href="contact-us.html" class="dropdown-item">
                            <i class="material-icons">location_on</i> Contact Us
                        </a>
                        <a href="landing-page.html" class="dropdown-item">
                            <i class="material-icons">view_day</i> Landing Page
                        </a>
                        <a href="login-page.html" class="dropdown-item">
                            <i class="material-icons">fingerprint</i> Login Page
                        </a>
                        <a href="pricing.html" class="dropdown-item">
                            <i class="material-icons">attach_money</i> Pricing Page
                        </a>
                        <a href="shopping-cart.html" class="dropdown-item">
                            <i class="material-icons">shopping_basket</i> Shopping Cart
                        </a>
                        <a href="ecommerce.html" class="dropdown-item">
                            <i class="material-icons">store</i> Ecommerce Page
                        </a>
                        <a href="product-page.html" class="dropdown-item">
                            <i class="material-icons">shopping_cart</i> Product Page
                        </a>
                        <a href="profile-page.html" class="dropdown-item">
                            <i class="material-icons">account_circle</i> Profile Page
                        </a>
                        <a href="signup-page.html" class="dropdown-item">
                            <i class="material-icons">person_add</i> Signup Page
                        </a>
                        <a href="error.html" class="dropdown-item">
                            <i class="material-icons">error</i> Error Page
                        </a>
                    </div>
                </li>--}}
                <li class="nav-item">
                    <a href="https://www.creative-tim.com/product/material-kit-pro@ref=presentation" target="_blank" class="nav-link">
                        <i class="material-icons">account_balance</i> About Us
                    </a>
                </li>
                <li class="nav-item">
                    <a href="{{asset('signin')}}" class="nav-link">
                        <i class="material-icons">fingerprint</i> Log In
                    </a>
                </li>
                <li class="button-container nav-item iframe-extern">
                    <a href="{{asset('signup')}}" class="btn  btn-rose   btn-round btn-block">
                        <i class="material-icons">person_add</i> Sign Up
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
