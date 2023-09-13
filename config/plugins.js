// plugins.js
module.exports = ({ env }) => ({
    tinymce: {
        enabled: true,
        config: {
            editor: {
                outputFormat: "html",
                editorConfig: {
                    language: "eng",
                    height: 500,
                    plugins: 'preview importcss searchreplace autolink accordion autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                    editimage_cors_hosts: ['picsum.photos'],
                    menubar: 'file edit view insert format tools table help',
                    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | accordion |charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                    toolbar_sticky: true,
                style_formats: [
                        {
                            title: "Headings",
                            items: [
                                { title: "h1", block: "h1" },
                                { title: "h2", block: "h2" },
                                { title: "h3", block: "h3" },
                                { title: "h4", block: "h4" },
                                { title: "h5", block: "h5" },
                                { title: "h6", block: "h6" },
                            ],
                        },

                        {
                            title: "Text",
                            items: [
                                { title: "Paragraph", block: "p" },
                                {
                                    title: "Paragraph with small letters",
                                    block: "small",
                                },
                            ],
                        },
                        {
                          title: "Divs",
                          items: [
                              { title: "Div", block: "div" },
                              { title: "Section", block: "section" },

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
                      { title: 'My page 2', value: 'http://www.moxiecode.com' }
                    ],
                    image_list: [
                      { title: 'My page 1', value: 'https://www.tiny.cloud' },
                      { title: 'My page 2', value: 'http://www.moxiecode.com' }
                    ],
                    image_class_list: [
                      { title: 'None', value: '' },
                      { title: 'Some class', value: 'class-name' }
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
                        callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
                      }
                    },
                    templates: [
                      { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
                      { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
                      { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl" style="background-color:red"><span class="cdate">cdate</span><br><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' },
                      
                        {
                          title: 'Image Card',
                          description: 'A card with an image',
                          content: '<div class="card"><img src="image-url.jpg" alt="Image"><p>Description here</p></div>'
                        },
                        {
                          title: 'Text Card',
                          description: 'A card with text content',
                          content: '<div class="card"><p>Your text goes here</p></div>'
                        },
                        {
                          title: 'Link Card',
                          description: 'A card with a link',
                          content: '<div class="card"><a href="https://example.com">Link Text</a></div>'
                        }
                     
                      
                    ],
                    template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
                    template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
                    
                    image_caption: true,
                    quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                    noneditable_class: 'mceNonEditable',
                    toolbar_mode: 'sliding',
                    contextmenu: 'link image table',
                    skin: 'oxide-dark',
                    content_css: 'writer',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                },
            },
        },
    },
});