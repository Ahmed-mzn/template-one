<template>
    <div class="templatetwo">
        <section>
            <div class="container-fluid" style="padding-left: 0px;padding-right: 0px;"><img :src="template.main_image" style="width: 100%;"></div>
        </section>
        <section>
            <div class="container">
                <div class="d-flex justify-content-start align-items-end pt-0 mt-3">
                    <div><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span></div><span class="d-flex text-muted me-1" style="font-size: 12px;">48,120</span>
                </div>
                <h2 style="font-size: 30px;" class="mb-3">{{template.meta_title}}</h2>
                <!-- <h3 style="font-size: 16px;color: #333;" class="mb-4">بكر ممتاز عصرة اولى</h3> -->
                <p style="font-size: 16px;color: #333;">{{template.description}}</p><img :src="template.medals_image" style="width: 100%;margin-top: 22px;">
            </div>
        </section>
        <section class="mt-4">
            <div class="container">
                <h3 style="font-size: 16px;font-weight: bold;" class="mb-4">العرض</h3>
                <div id="swiperSlider" class="swiper-container" style="margin-bottom: 57px;overflow: hidden;">
                    <div class="swiper-wrapper" style="cursor: pointer;">
                        <div v-for="(product, index) in template.products" :key="product.id" :class="getDivClass(index)" @click="selectProduct(product)" style="width: 145px;padding-bottom: 9px;padding-left: 8px;padding-right: 8px;padding-top: 0px;margin-left: 11px;background-color: #f2f2f2;border-radius: 8px;border-style: solid;border-color: transparent;">
                            <div style="width: 70px;height: 70px;border-radius: 10px;margin-bottom: 10px;position: relative;margin-top: 15px;">
                                <div style="position: absolute;width: 75px;left: -22px;"><img :src="product.image" style="width: 100%;"></div>
                            </div>
                            <h3 style="font-size: 16px;">{{product.title}}</h3>
                            <h4 style="font-size: 12px;">{{product.description}}</h4>
                            <p style="color: #999A9A;text-decoration:  line-through;">{{product.price}} ر.س</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <p style="color: #E5423B;margin-top: 0px;margin-bottom: 6px;white-space: nowrap;">{{product.price}} ر.س</p><span style="font-size: 9px;background: #EB6A64;color: #ffff;border-radius: 17px;padding: 3px 7px 3px;white-space: nowrap;">الاكثر توفيراً</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <h3 style="font-size: 16px;font-weight: bold;">الكمية</h3>
                    <div class="d-flex justify-content-between align-items-center" style="width: 250px;padding: 10px 25px;border-radius: 5px;color: rgb(0,0,0);border: 1px solid #F2F2F2 ;"><i @click="decreaseQty()" class="fas fa-minus disabled" id="quantity-minus" style="color: var(--bs-primary);"></i><span id="quantity-text" style="font-size: 18px;">1</span><i @click="increaseQty()" class="fas fa-plus" id="quantity-plus" style="color: var(--bs-primary);"></i></div>
                </div><button class="btn btn-primary py-3" type="button" style="width: 100%;background: var(--bs-primary);border-style: none;border-radius: 4px;margin-top: 34px;">اطلبه الآن</button>
                <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;"></div>
                <h3 style="font-size: 16px;font-weight: bold;">حفظ هذا العرض لوقت لاحق</h3><a class="btn btn-primary d-flex justify-content-center align-items-end" role="button" style="width: 100%;background: #f2f2f2;border-style: none;border-radius: 4px;color: #000;padding-top: 10px;padding-bottom: 16px;"><i class="fab fa-whatsapp" style="font-size: 20px;"></i>&nbsp;<span>ارسله لي عبر الوتس اب<br></span>&nbsp;</a>
                <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" class="mb-4"></div>
            </div>
        </section>
        <section v-if="!success">
            <div class="container">
                <div style="box-shadow: 0px 5px 12px #f2f2f2;border: 1px solid #f2f2f2;border-radius: 8px;" class="px-2 pb-3">
                    <h1 style="font-size: 30px;text-align: center;" class="mb-4 mt-3">اطلبه الآن</h1>
                    <form>
                        <div class="mb-2">
                            <input v-model="form.name" id="formName" class="form-control py-3" type="text" placeholder="الاسم" style="background: #f2f2f2;border-style: none;">
                            <div id="formNameError" style="color: var(--bs-primary)" class="invalid-feedback"></div>
                        </div>
                        <div class="mb-2" style="position: relative;">
                            <input class="form-control py-3" id="formPhone" type="text" v-model="form.phone_number" placeholder="xx xxx xxx" style="background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;">
                            <div id="formPhoneFlag" class="d-flex align-items-center" style="position: absolute;top: 50%;transform: translateY(-50%);left: 20px;"><span>05&nbsp;&nbsp;</span><img src="@/assets/img/saudi-arabia-flag-icon.png" style="width: 20px;"></div>
                            <div id="formPhoneError" style="color: var(--bs-primary)" class="invalid-feedback"></div>
                        </div>
                        <div class="mb-2" style="position: relative;"><select v-model="form.city" class="form-select py-3" style="padding-right: 12px;padding-left: 34px;border-style: none;background: #f2f2f2;">
                                <option value="1">جدة</option>
                                <option value="2">مكة</option>
                                <option value="3">الرياض</option>
                            </select><i class="fas fa-chevron-down" style="position: absolute;top: 50%;transform: translateY(-50%);left: 20px;"></i></div>
                        <div class="mb-2">
                            <input id="formAddress" v-model="form.address" class="form-control py-3" type="text" placeholder="العنوان (الحي، الشارع)" style="background: #f2f2f2;border-style: none;">
                            <div id="formAddressError" style="color: var(--bs-primary)" class="invalid-feedback"></div>
                        </div>
                        <div class="d-flex justify-content-between mt-3" style="color: #343434;"><span>{{form.product_obj.title}}</span><span>x{{form.quantity}}</span></div>
                        <div class="d-flex justify-content-between mt-2" style="color: #343434;"><span>السعر شامل الضريبة</span><span>{{form.product_obj.price}} ر.س</span></div>
                        <div class="d-flex justify-content-between mt-2" style="color: #343434;"><span>الشحن السريع</span><span>مجاني</span></div>
                        <div style="border-bottom: 1px solid #F2F2F2;margin-top: 25px;margin-bottom: 15px;" class="mb-0"></div>
                        <div class="d-flex justify-content-between mt-2" style="color: #343434;"><span style="font-weight: bold;">الاجمالي</span><span style="font-weight: bold;">{{form.quantity * form.product_obj.price}} ر.س</span></div>
                        <a @click="submitForm()" class="btn btn-primary py-3 mt-4" role="button" style="width: 100%;background: var(--bs-primary);border-style: none;border-radius: 4px;margin-top: 34px;">شراء</a>
                    </form>
                </div>
            </div>
        </section>
        <section v-else>
            <div class="container">
                <div style="box-shadow: 0px 5px 12px #f2f2f2;border: 1px solid #f2f2f2;border-radius: 8px;" class="px-2 pb-3">
                    <!-- <h1 style="font-size: 30px;text-align: center;" class="mb-4 mt-3">اطلبه الآن</h1> -->
                    <div class="text-center p-5">
                        <span class="display-4" style="color: var(--bs-primary);margin-left: 5px;"><i class="fas fa-check-circle"></i></span>
                        <h1>شكرا لك</h1>
                        <p style="font-size: 30px">تم استقبال طلبك بنجاح</p>
                        
                        <p>سنقوم بأكيد طلبك عبر الواتس اب</p>
                        <p style="color: var(--bs-primary);">{{this.form.phone_number}}</p>
                    </div>

                    <a class="btn btn-primary py-3 mt-4" role="button" style="width: 100%;background: var(--bs-primary);border-style: none;border-radius: 4px;margin-top: 34px;">شارك العرض مع صديق</a>
                </div>
            </div>
        </section>
        <section class="mt-5 pb-0" style="padding-bottom: 0px;">
            <div class="container-fluid px-0" style="position: relative;"><img style="width: 100%;max-width: 400px;" :src="template.second_image"><img :src="template.logo" style="width: 80px;position: absolute;top: 20px;left: 20px;"></div>
        </section>
        <section style="background: #FBF4EA;margin-top: -194px;padding-top: 196px;">
            <div class="container" style="padding-bottom: 38px;">
                <h2 style="font-size: 40px;color: #343434;" class="mb-3 mt-5">لماذا صفوة الجوف؟</h2>
                <!-- <p style="font-size: 16px;color: #343434;">لأننا نقدم منتج فاخر وعضوي ١٠٠٪ يعتني بجودة غذائكم وصحتكم.</p> -->
                <div v-for="feature in template.features" :key="feature.id">
                    <h2 style="font-size: 30px;color: #343434;" class="mb-3 mt-4"><i class="fas fa-check" style="color: var(--bs-primary);"></i>&nbsp;{{feature.title}}</h2>
                    <p style="font-size: 16px;color: #343434;">{{feature.description}}</p>
                </div>
                <button class="btn btn-primary py-3" type="button" style="width: 100%;background: var(--bs-primary);border-style: none;border-radius: 4px;margin-top: 34px;">اطلبه الآن</button>
            </div>
        </section>
        <section class="pt-4">
            <div class="container">
                <h1 style="text-align: center;font-size: 30px;"><span style="font-weight: bold;font-family: sans-serif;">{{template.review_text}}</span></h1>
                <div class="d-flex justify-content-center align-items-end pt-0 mt-3">
                    <div><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span></div><span class="d-flex text-muted me-1" style="font-size: 12px;color: #333!important;">4.8 من 5</span>
                </div>
                <div v-for="review in template.reviews" :key="review.id" class="d-flex mt-4 py-4 px-2" style="border-radius: 8px;border: 1px solid #f2f2f2 ;">
                    <div class="ms-2"><img src="@/assets/img/avatar.jpg" style="width: 50px;border-radius: 50%;"></div>
                    <div class="flex-grow-1">
                        <div class="d-flex justify-content-between align-items-start">
                            <div><span style="font-weight: bold;">{{review.username}}</span>
                                <div style="font-size: 12px;" class="mt-1 mb-1"><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span><span style="color: var(--bs-secondary);margin-left: 5px;"><i class="fas fa-star"></i></span></div>
                            </div><span style="font-size: 12px;color: var(--bs-black);background: var(--bs-secondary);border-radius: 50px;" class="py-1 px-3"><i class="fas fa-check"></i>&nbsp;قام بالشراء</span>
                        </div>
                        <p class="mt-2 mb-0">{{review.comment}}</p>
                    </div>
                </div>
                <a class="btn btn-primary py-3 mt-4 mb-4" role="button" style="width: 100%;border-radius: 8px;margin-top: 34px;background: transparent;color: #000;border-style: solid;border-color: #000;" target="_blank" :href="template.customer_website">للمزيد زر&nbsp;{{template.customer_website}}</a>
            </div>
        </section>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TemplateTwoView",
    data() {
        return {
            success: false,
            form: {
                product_obj: {
                    title: '',
                    price: ''
                },
                template: 0,
                product: 0,
                quantity: 1,
                name: '',
                phone_number: '',
                city: '',
                address: ''
            },
            session: {
                template: 0,
                ip_address: '',
                city: '',
                region: '',
                country: '',
                location: '',
                duration: 0
            },
            template: {
                id: 0,
                template_code: '',
                description: '',
                meta_title: '',
                meta_description: '',
                meta_keywords: '',
                logo: '',
                main_image: '',
                medals_image: '',
                second_image: '',
                review_text: '',
                primary_color: '',
                secondary_color: '',
                products: [],
                features: [],
                reviews: [],
                created_at: '',
                updated_at: ''
            }
        };
    },
    created(){
        window.setInterval(() => {
            this.setDuration();
        }, 1000)
        window.addEventListener("beforeunload", this.leaving);
    },
    mounted() {
        this.getTemplate();
        this.getIpInfo();
        require('@/assets/js/app.js');
        // this.startTracking();
    },
    methods: {
        selectProduct(product){
            console.log(product);
            this.form.product_obj = product;
            this.form.product = product.id;
        },
        decreaseQty(){
            this.form.quantity = this.form.quantity - 1;
        },
        increaseQty(){
            this.form.quantity = this.form.quantity + 1;
        },
        getDivClass(index){
            if(index == 0){
                return "swiper-slide active";
            } else {
                return "swiper-slide";
            }
            
        },
        setDuration(){
            this.session.duration = this.session.duration + 1;
        },
        getCookie(cname){
            let name = cname + "=";
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for(let i = 0; i <ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        submitForm(){
            var valid = true;

            if(this.form.name == ''){
                valid = false;
                document.getElementById("formName").style = "background: #f2f2f2;border-color: var(--bs-primary);"
                document.getElementById("formName").classList.add("is-invalid");
                document.getElementById("formNameError").textContent = "يرجى إدخال الاسم";
            } else {
                document.getElementById("formName").style = "background: #f2f2f2;border-style: none;"
                document.getElementById("formName").classList.remove("is-invalid");
                document.getElementById("formNameError").textContent = "";
            }

            let isnum = /^\d+$/.test(this.form.phone_number);
            if(this.form.phone_number == '' || !isnum || this.form.phone_number.length != 8){
                valid = false;
                document.getElementById("formPhone").style = "background: #f2f2f2;border-color: var(--bs-primary);padding-left: 83px;direction: ltr;"
                document.getElementById("formPhone").classList.add("is-invalid");
                document.getElementById("formPhoneError").textContent = "يرجى إدخال رقم جوال صحيح";
                document.getElementById("formPhoneFlag").style = "position: absolute;top: 35%;transform: translateY(-50%);left: 20px;";
            } else {
                document.getElementById("formPhone").style = "background: #f2f2f2;border-style: none;padding-left: 83px;direction: ltr;"
                document.getElementById("formPhone").classList.remove("is-invalid");
                document.getElementById("formPhoneError").textContent = "";
                document.getElementById("formPhoneFlag").style = "position: absolute;top: 50%;transform: translateY(-50%);left: 20px;";
            }

            if(this.form.address == ''){
                valid = false;
                document.getElementById("formAddress").style = "background: #f2f2f2;border-color: var(--bs-primary);"
                document.getElementById("formAddress").classList.add("is-invalid");
                document.getElementById("formAddressError").textContent = "يرجى إدخال العنوان";
            } else {
                document.getElementById("formAddress").style = "background: #f2f2f2;border-style: none;"
                document.getElementById("formAddress").classList.remove("is-invalid");
                document.getElementById("formAddressError").textContent = "";
            }

            if(valid){
                axios.post("/create_form", this.form)
                .then((response) => {
                    console.log(response);
                    document.cookie = `name=${this.form.name}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
                    document.cookie = `phonenumber=${this.form.phone_number}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
                    document.cookie = `city=${this.form.city}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;
                    document.cookie = `address=${this.form.address}; expires=Thu, 01 Jan 9999 00:00:00 UTC`;

                    this.success = true;
                })
                .catch((error) => {
                    console.log(JSON.stringify(error));
                });
            }
        },
        leaving(){
            fetch('/create_visit', {
                method: 'POST', 
                body: JSON.stringify(this.session),              
                credentials: "same-origin",
                headers: {
                    "Accept": "application/json",
                    'Content-Type': 'application/json'
                },
                keepalive: true,
            })
            this.session.duration = 0;
        },
        getTemplate(){
            axios
            .get(
                "/apps/template_two/" + process.env.VUE_APP_APP_ID
            )
            .then((response) => {
                console.log(response);
                this.template = response.data;
                document.title = this.template.meta_title;
                var link = document.querySelector("link[rel*='icon']");
                link.href = this.template.logo;
                this.form.template = this.template.id;
                if(response.data.products.length != 0){
                    this.form.product = this.template.products[0].id;
                    this.form.product_obj = this.template.products[0];
                }

                let html = document.getElementById("html");
                html.style = `--bs-secondary: ${this.template.secondary_color};--bs-secondary-rgb: 245,210,96;--bs-primary: ${this.template.primary_color};--bs-primary-rgb: 183,194,38;`;

                this.form.name = this.getCookie('name');
                this.form.phone_number = this.getCookie('phonenumber');
                this.form.city = this.getCookie('city');
                this.form.address = this.getCookie('address');
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
            });
        },
        createVisit(){
            axios.post("/create_visit", this.session)
            .then((res) => {
                console.log(res);
            })
            .catch((error) =>{
                console.log(JSON.stringify(error));
            })
        },
        getIpInfo(){
            axios.get("https://ipinfo.io/?token=37b3a65957bff3")
            .then(response => {
                let data = response.data;

                this.session.ip_address = data.ip;
                this.session.location = data.loc;
                this.session.city = data.city;
                this.session.country = data.country;
                this.session.region = data.region;
                this.session.template = this.template.id;
            })
            .catch((error) =>{
                console.log(JSON.stringify(error));
            })
        }
    }
};
</script>
