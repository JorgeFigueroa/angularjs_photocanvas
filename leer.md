git clone https://atientas@bitbucket.org/atientas/pixie.git


****comandos terminal******

# To install latest release and update package.json 
npm install angular-material --save
npm install angular-animate --save




sudo npm install -g grunt-cli
sudo gem install sass
npm install
grunt

plugin de sublime para less y sass
https://packagecontrol.io/packages/LESS
https://packagecontrol.io/packages/SCSS

file generado x sass documentacion
http://sass-lang.com/documentation/file.SASS_REFERENCE.html#output_style
gruntfile.js linea 35
style: 'expanded',



/*jorge_comentario



schede di sottomenu

            <div class="btn-group" data-toggle="buttons">
                    <label class="btn btn-default active">
                        <input type="radio" name="options" id="option1" autocomplete="off" checked=""> Active projet <span
                            style="margin-left: 20px"> X</span>
                    </label>
                    <label class="btn btn-default">
                        <input type="radio" name="options" id="option2" autocomplete="off">Inactive Projet <span
                            style="margin-left: 20px"> X </span>
                    </label>
                </div>
                
                
                
                
                
                
                
                
                <div ed-pretty-scrollbar ed-scroll-axis="y" ed-scroll-theme="light" ed-stickers-categories>
                                            <section ng-repeat="category in categories" class="sticker-category-container">
                                                <div class="category-header" data-name="{{ category.name }}">{{ category.name }}</div>
                
                
                                                <div class="category-stickers"
                                                     ng-class="{ 'open animated slideInDown': activeCategory === category.name, 'dark-bg': category.darkbg }">
                                                    <div ng-repeat="doodle in category.items track by $index"
                                                         ng-click="addToCanvas(category, $index+1, $event)" class="sticker">
                                                        <img class="img-responsive"
                                                             data-src="assets/images/stickers/{{category.name}}/{{$index+1}}.{{ category.type }}"/>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>