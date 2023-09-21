module.exports = ({ env }) => ({
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: 'html',
        editorConfig: {
          language: 'eng',
          height: 500,
          plugins:
            'preview importcss searchreplace autolink accordion autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
          editimage_cors_hosts: ['picsum.photos'],
          menubar: 'file edit view insert format tools table help',
          toolbar:
            'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | accordion |charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
          toolbar_sticky: true,
          style_formats: [
            {
              title: 'Headings',
              items: [
                { title: 'h1', block: 'h1', classes: 'text-4xl text-orange' },
                { title: 'h2', block: 'h2' },
                { title: 'h3', block: 'h3' },
                { title: 'h4', block: 'h4' },
                { title: 'h5', block: 'h5' },
                { title: 'h6', block: 'h6' },
              ],
            },

            {
              title: 'Text',
              items: [
                { title: 'Paragraph', block: 'p' },
                {
                  title: 'Paragraph with small letters',
                  block: 'small',
                },
              ],
            },
            {
              title: 'Divs',
              items: [
                { title: 'Div', block: 'div', classes: 'bg-red text-white' },
                { title: 'Section', block: 'section' },
              ],
            },
            {
              title: 'Links',
              items: [
                { title: 'Link', block: 'Link'},
                { title: 'Anchor', block: 'a' },
              ],
            },
          ],
          autosave_ask_before_unload: true,
          autosave_interval: '30s',
          autosave_prefix: '{path}{query}-{id}-',
          autosave_restore_when_empty: false,
          autosave_retention: '2m',
          image_advtab: true,
          link_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' },
          ],
          image_list: [
            { title: 'My page 1', value: 'https://www.tiny.cloud' },
            { title: 'My page 2', value: 'http://www.moxiecode.com' },
          ],
          image_class_list: [
            { title: 'None', value: '' },
            { title: 'Some class', value: 'class-name' },
          ],
          importcss_append: true,
          file_picker_callback: (callback, value, meta) => {
            /* Provide file and text for the link dialog */
            if (meta.filetype === 'file') {
              callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
            }

            /* Provide image and alt text for the image dialog */
            if (meta.filetype === 'image') {
              callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
            }

            /* Provide alternative source and posted for the media dialog */
            if (meta.filetype === 'media') {
              callback('movie.mp4', {
                source2: 'alt.ogg',
                poster: 'https://www.google.com/logos/google.jpg',
              });
            }
          },

          templates: [
            {
              title: 'New Table',
              description: 'creates a new table',
              content:
                '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>',
            },
            {
              title: 'Starting my story',
              description: 'A cure for writers block',
              content: 'Once upon a time...',
            },
            {
              title: 'New list with dates',
              description: 'New List with dates',
              content:
                '<div class="mceTmpl" style="background-color:red"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>',
            },

            {
              title: 'Image Card',
              description: 'A card with an image',
              content:
                '<div class="card"><img src={$logo} alt="Image"><p>Description here</p></div>',
            },
            {
              title: 'Text Card',
              description: 'A card with text content',
              content: '<div class="card"><p>Your text goes here</p></div>',
            },
            {
              title: 'Link Card',
              description: 'A card with a link',
              content:
                '<div class="card bg-red text-white"><Link href="https://example.com">Link Text</Link></div>',
            },
            {
              title: 'Projects ',
              description: 'A Projects',
              content:
                `<div class="mceTmpl">
                <div class="container">
                <div class="flex flex-row justify-between px-10">
                  <div>
                    <h1 class="text-4xl  font-bold ">Discover our Projects</h1>
                    <p class="w-1/2">
                      Our success in creating business solutions is due in large part to
                      our talented and highly committed team.
                    </p>
                  </div>
                  <div class="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      class="rounded border-warmGray-50 bg-orange-500 px-8 py-3 text-lg font-semibold  hover:bg-orange-400"
                    >
                      View All
                    </a>
                  </div>
                </div>
          
                <div class="py-10">
                  <div class="container mx-auto">
                    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      <div class="group fixed bottom-0 left-0 right-0 top-0 z-20 hidden h-full w-full cursor-pointer bg-black bg-opacity-50">
                        <div class="absolute inset-0 flex items-center justify-center">
                          <p class="text-center text-lg font-semibold text-white">
                            Title Here
                          </p>
                        </div>
                      </div>
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 1"
                          class="h-48 w-full object-cover"
                        />
                      </div>
          
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 1"
                          class="h-48 w-full object-cover"
                        />
                      </div>
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 1"
                          class="h-48 w-full object-cover"
                        />
                      </div>
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 1"
                          class="h-48 w-full object-cover"
                        />
                      </div>
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 2"
                          class="h-48 w-full object-cover"
                        />
                      </div>
          
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 3"
                          class="h-48 w-full object-cover"
                        />
                      </div>
                      <div class="transform overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 ease-in-out hover:scale-110">
                        <img
                          src="image/Project.jpg"
                          alt="Image 4"
                          class="h-48 w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div></div>`,
            },
            {
              title: 'Services ',
              description: 'Services Card',
              content:
                `<div class="mceTmpl">
                <div class="py-10">
                <div class="container mx-auto">
                  <div class="flex flex-row justify-between px-10 py-10">
                    <div>
                      <h1 class="text-4xl  font-bold ">Build A Future Strategy!</h1>
                      <p class="w-1/2">
                        Our success in creating business solutions is due in large part to
                        our talented and highly committed team.
                      </p>
                    </div>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 lg:justify-start">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        class="rounded border-warmGray-50 bg-orange-500 px-8 py-3 text-lg font-semibold  hover:bg-orange-400"
                      >
                        View All
                      </a>
                    </div>
                  </div>
                  <div class="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div class="wrapper text-gray-900 antialiased">
                      <div>
                        <img
                          src="image/servics.jpg"
                          alt=" random imgee"
                          class="w-full rounded-lg object-cover object-center shadow-md"
                        />
          
                        <div class="relative -mt-16 px-4  ">
                          <div class="rounded-lg bg-white p-6 shadow-lg">
                            <div class="flex items-baseline"></div>
                            <AiOutlineMessage size={70} />
          
                            <h4 class="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                              Web development
                            </h4>
                            <div class="mt-4">
                              <span class="text-md font-semibold text-teal-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur eius animi fugiat!
                              </span>
                              <span class="text-sm text-gray-600">
                                (based on 234 ratings)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrapper text-gray-900 antialiased">
                      <div>
                        <img
                          src="image/service2.jpg"
                          alt=" random imgee"
                          class="w-full rounded-lg object-cover object-center shadow-md"
                        />
          
                        <div class="relative -mt-16 px-4  ">
                          <div class="rounded-lg bg-white p-6 shadow-lg">
                            <div class="flex items-baseline"></div>
                            <BiAnalyse size={70} />
          
                            <h4 class="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                              Data Analytics
                            </h4>
                            <div class="mt-4">
                              <span class="text-md font-semibold text-teal-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur eius animi fugiat!
                              </span>
                              <span class="text-sm text-gray-600">
                                (based on 234 ratings)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="wrapper text-gray-900 antialiased">
                      <div>
                        <img
                          src="image/service3.jpg"
                          alt=" random imgee"
                          class="w-full rounded-lg object-cover object-center shadow-md"
                        />
          
                        <div class="relative -mt-16 px-4  ">
                          <div class="rounded-lg bg-white p-6 shadow-lg">
                            <div class="flex items-baseline"></div>
                            <BiMedal size={70} />
          
                            <h4 class="mt-1 truncate text-xl font-semibold uppercase leading-tight">
                              User Interface
                            </h4>
                            <div class="mt-4">
                              <span class="text-md font-semibold text-teal-600">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Consequatur eius animi fugiat!
                              </span>
                              <span class="text-sm text-gray-600">
                                (based on 234 ratings)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
               
             
              </div>`,
            },
            
            {
              title: 'FAQS',
              description: 'A frequently asked questions section',
              content: `<div class="mceTmpl bg-black">
              <section>
              <div class="min-h-sceen mx-auto max-w-screen-xl bg-neutral-900 px-5">
                <div class="flex flex-col items-center">
                  <h2 class="mt-5 text-5xl font-bold tracking-tight">FAQ</h2>
                  <p class="mt-3 text-xl text-orange-500">
                    Frequenty asked questions
                  </p>
                </div>
                <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div class="py-5">
                    <details class="mce-accordion bg-white p-4 shadow-md transition duration-300 hover:shadow-lg">
                      <summary class="cursor-pointer text-orange-500">
                        Accordion summary...
                      </summary>
                      <p class="mt-2 text-black">Accordion body...</p>
                    </details>
                  </div>
                </div>
              </div>
            </section>
                        </div>
                        `,
            },
            {
              title: 'Hero',
              description: 'A hero section',
              content: `<div class="mceTmpl>
              <div className="overflow-hidden bg-black pt-[82px] sm:-mx-[250px] sm:rounded-b-[50%] lg:-mx-[150px] lg:pt-[106px]">
                <div className="relative">
                    <img src="/assets/images/banner-lefticon.png" alt="banner-lefticon" className="absolute left-0 top-20 sm:left-[250px] lg:left-[150px]" />
                    <img
                        src="/assets/images/banner-rightIcon.png"
                        alt="banner-rightIcon"
                        className="absolute right-0 -top-4 sm:right-[250px] lg:right-[150px]"
                    />
                    <div className="container">
                        <div className="relative bg-[url(/assets/images/world-map.png)] bg-cover bg-top bg-no-repeat pt-14 pb-0 lg:pt-20 lg:pb-60 xl:pt-36">
                            <div className="relative z-[1] text-center text-white lg:w-3/5 ltr:lg:text-left rtl:lg:text-right xl:w-1/2">
                                <h2 className="text-4xl font-extrabold leading-normal sm:text-5xl lg:text-[70px] lg:leading-[90px] ">
                                    Make your <span className="italic text-primary">team</span> <span className="italic text-secondary">work</span> together
                                </h2>
                                <p className="my-8 text-lg lg:w-[90%] ">
                                    In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.
                                </p>
                                <Link href="/about-us" className="btn mx-auto mt-2 block w-fit bg-white lg:mx-0 lg:rtl:ml-auto">
                                    read more
                                </Link>
                            </div>
                            <div
                                className="bottom-0 mx-auto mt-5 mb-2 w-auto ltr:right-0 rtl:left-0 md:w-[540px] lg:absolute lg:mb-0 lg:mt-0 xl:w-[650px]"
                                data-aos={isRtl ? 'fade-right' : 'fade-left'}
                                data-aos-duration="1000"
                                data-aos-offset="0"
                                data-aos-delay="200"
                            >
                                <img src="/assets/images/home-banner-icon.svg" alt="home-banner-icon" className="rtl:rotate-y-180" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
              </div>`
            }
          ],
          extended_valid_elements: [
            'input[id="dummyInput"|name|value|type|class|style|required|placeholder|autocomplete|onclick]',
            'span[id="dummySpan"|class|style]',
            'select[id="dummySelect"|name|class|style]',
            'option[id="dummyOption1"|name|class|style]',
            'option[id="dummyOption2"|name|class|style]',
            'div[id="dummyDiv"|name|class|style]',
            'label[id="dummyLabel"|name|class|style]',
            'textarea[id="dummyTextarea"|name|class|style]',
          ],
          template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
          template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',

          image_caption: true,
          quickbars_selection_toolbar:
            'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
          noneditable_class: 'mceNonEditable',
          toolbar_mode: 'sliding',
          contextmenu: 'link image table',
          skin: 'oxide-dark',
          content_css: `@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`,
          content_style: `@import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');`,
        },
      },
    },
  },
});