import React from "react";

const BlogDetails = () => {
  return (
    <div>
      <div>
        <section className="bg-gray-7">
          <div className="breadcrumbs-custom box-transform-wrap context-dark">
            <div className="container">
              <h3 className="breadcrumbs-custom-title">Blog post</h3>
              <div className="breadcrumbs-custom-decor" />
            </div>
            <div
              className="box-transform"
              style={{
                backgroundImage: "url(/assets/images/bg-typography.jpg)",
              }}
            />
          </div>
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="grid-blog.html">News</a>
              </li>
              <li className="active">Blog post</li>
            </ul>
          </div>
        </section>
        {/* Grid Blog*/}
        <section className="section section-lg bg-default">
          <div className="container">
            <div className="row row-60 row-xl-75">
              <div className="col-lg-8">
                <div className="single-post section-style-2">
                  <h5 className="text-spacing-50 font-weight-normal text-transform-none">
                    Repairs To Commercial Buildings: What To Think About
                  </h5>
                  <div className="group-md group-middle">
                    <time className="post-classic-time" dateTime="2021-04-05">
                      April 05, 2021
                    </time>
                    <div>
                      <ul className="list-inline list-inline-xl post-classic-info">
                        <li className="post-classic-author">
                          <span className="icon mdi mdi-account-outline" />
                          <span>
                            by <a href="#">Harry Burns</a>
                          </span>
                        </li>
                        <li className="post-classic-views">
                          <span className="icon mdi mdi-eye" />
                          <span>3678</span>
                        </li>
                        <li className="post-classic-comments">
                          <span className="icon mdi mdi-comment-outline" />
                          <a href="#">3</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor
                  </p>
                  <img
                    src="/assets/images/post-16-770x403.jpg"
                    alt
                    width={770}
                    height={403}
                  />
                  <p>
                    Eu scelerisque felis imperdiet proin fermentum leo vel orci.
                    Vulputate enim nulla aliquet porttitor lacus luctus accumsan
                    tortor posuere. Cursus eget nunc scelerisque viverra mauris
                    in aliquam sem fringilla. Viverra nibh cras pulvinar mattis
                    nunc sed. Amet consectetur adipiscing elit pellentesque. Ut
                    consequat semper viverra nam libero justo laoreet sit.
                    Nullam vehicula ipsum a arcu cursus vitae congue. Nunc
                    pulvinar sapien et ligula ullamcorper.
                  </p>
                  {/* Quote Classic*/}
                  <article className="quote-classic">
                    <div className="quote-classic-text">
                      <p className="q">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusa nt ium doloremque laudantium totam rem
                        aperiam
                      </p>
                    </div>
                  </article>
                  <div className="unit unit-spacing-xl flex-column flex-md-row flex-lg-column flex-xl-row">
                    <div className="unit-left">
                      <img
                        src="/assets/images/post-17-333x243.jpg"
                        alt
                        width={333}
                        height={243}
                      />
                    </div>
                    <div className="unit-body">
                      <p>
                        Adipiscing elit ut aliquam purus sit amet. Ut porttitor
                        leo a diam sollicitudin tempor. Iaculis eu non diam
                        phasellus vestibulum. Tristique senectus et netus
                      </p>
                      <p>
                        Aliquet eget sit amet tellus cras. Id eu nisl nunc mi
                        ipsum faucibus vitae aliquet. At volutpat diam ut
                        venenatis tellus in metus vulputate. Enim ut sem viverra
                        aliquet. Molestie a iaculis at erat pellentesque
                        adipiscing commodo elit at. Vitae congue mauris rhoncus
                        aenean vel elit scelerisque.{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="inset-left-xl-40">
                  <div className="aside row row-60 row-xl-75">
                    <div className="aside-item col-12">
                      <form
                        className="form-search rd-search form-search"
                        action="search-results.html"
                        method="GET"
                      >
                        <div className="form-wrap">
                          <label className="form-label" htmlFor="search-form-2">
                            Search the blog...
                          </label>
                          <input
                            className="form-input"
                            id="search-form-2"
                            type="text"
                            name="s"
                            autoComplete="off"
                          />
                          <button
                            className="button-search fl-bigmug-line-search74"
                            type="submit"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="aside-item col-md-6 col-lg-12">
                      <h6 className="aside-title">Category</h6>
                      <ul className="list-marked-2 list-category-2">
                        <li>
                          <a href="#">News</a>
                          <span className="list-category-number">12</span>
                        </li>
                        <li>
                          <a href="#">Exploration</a>
                          <span className="list-category-number">10</span>
                        </li>
                        <li>
                          <a href="#">Drilling</a>
                          <span className="list-category-number">11</span>
                        </li>
                        <li>
                          <a href="#">Refining</a>
                          <span className="list-category-number">14</span>
                        </li>
                      </ul>
                    </div>
                    <div className="aside-item col-md-6 col-lg-12">
                      <h6 className="aside-title">Popular Posts</h6>
                      <div className="list-popular-post">
                        <div className="list-popular-post-item">
                          {/* Post Minimal*/}
                          <article className="post post-minimal">
                            <div className="unit unit-spacing-2 align-items-center unit-spacing-md">
                              <div className="unit-left">
                                <a
                                  className="post-minimal-figure"
                                  href="blog-post.html"
                                >
                                  <img
                                    src="/assets/images/post-13-106x104.jpg"
                                    alt
                                    width={106}
                                    height={104}
                                  />
                                </a>
                              </div>
                              <div className="unit-body">
                                <p className="post-minimal-title">
                                  <a href="blog-post.html">
                                    Main Differences in Products from the
                                    Natural Gas Industry
                                  </a>
                                </p>
                                <div className="post-minimal-time">
                                  <time dateTime="2021-03-15">
                                    March 15, 2021
                                  </time>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="list-popular-post-item">
                          {/* Post Minimal*/}
                          <article className="post post-minimal">
                            <div className="unit unit-spacing-2 align-items-center unit-spacing-md">
                              <div className="unit-left">
                                <a
                                  className="post-minimal-figure"
                                  href="blog-post.html"
                                >
                                  <img
                                    src="/assets/images/post-14-106x104.jpg"
                                    alt
                                    width={106}
                                    height={104}
                                  />
                                </a>
                              </div>
                              <div className="unit-body">
                                <p className="post-minimal-title">
                                  <a href="blog-post.html">
                                    Blue Energy Signals US Oil Drilling Revival
                                  </a>
                                </p>
                                <div className="post-minimal-time">
                                  <time dateTime="2021-03-15">
                                    March 15, 2021
                                  </time>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="list-popular-post-item">
                          {/* Post Minimal*/}
                          <article className="post post-minimal">
                            <div className="unit unit-spacing-2 align-items-center unit-spacing-md">
                              <div className="unit-left">
                                <a
                                  className="post-minimal-figure"
                                  href="blog-post.html"
                                >
                                  <img
                                    src="/assets/images/post-15-106x104.jpg"
                                    alt
                                    width={106}
                                    height={104}
                                  />
                                </a>
                              </div>
                              <div className="unit-body">
                                <p className="post-minimal-title">
                                  <a href="blog-post.html">
                                    Oil Prices: Here Come The Bulls
                                  </a>
                                </p>
                                <div className="post-minimal-time">
                                  <time dateTime="2021-03-15">
                                    March 15, 2021
                                  </time>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="aside-item col-sm-6 col-lg-12">
                      <h6 className="aside-title">Blog Archive</h6>
                      <ul className="list-marked-2">
                        <li>
                          <a href="#">September 2021</a>
                        </li>
                        <li>
                          <a href="#">August 2021</a>
                        </li>
                      </ul>
                    </div>
                    <div className="aside-item col-sm-6 col-lg-12">
                      <h6 className="aside-title">Tags</h6>
                      <div className="group-xxs group-middle justify-content-start">
                        <a className="button-tags" href="#">
                          News
                        </a>
                        <a className="button-tags" href="#">
                          Gas
                        </a>
                        <a className="button-tags" href="#">
                          Drilling
                        </a>
                        <a className="button-tags" href="#">
                          Exploration
                        </a>
                        <a className="button-tags" href="#">
                          Processing
                        </a>
                        <a className="button-tags" href="#">
                          Oil
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogDetails;