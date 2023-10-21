<template>
     <div class="sidebar" id="sidebar">
            <div class="sidebar-inner">
                <vue-custom-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle">
                    <div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title">
								<span>Inicio APP Mau y Nilmar</span>
							</li>
							<li>
                <router-link to="/"><i class="fe fe-users"></i> <span>Alumnos</span></router-link>
							</li>
						</ul>
					</div>
            </vue-custom-scrollbar>
            </div>
        </div>
</template>
<script>
     import vueCustomScrollbar from 'vue-custom-scrollbar'
     import "vue-custom-scrollbar/dist/vueScrollbar.css"
    export default {
        components: {
    vueCustomScrollbar
  },
  mounted() {
	      // Template Options

	$(document).on('click', '.skin-sett-icon', function() {
		$('.skin-settings').toggleClass("active");
	});

	// Template Options html append

	if($('#demoSettings').length === 0) {
		$('.main-wrapper').append('<div class="skin-settings" id="demoSettings">'+
			'<div class="skin-sett-icon"><i class="fa fa-cog"></i></div>'+
			'<div class="skin-sett-body">'+
				'<h4>Template Colors</h4>'+
				'<ul class="skin-colors">'+
					'<li><a class="skin-purple" data-color="default" href="#"></a></li>'+
					'<li><a class="skin-red" data-color="red" href="#"></a></li>'+
					'<li><a class="skin-teal" data-color="teal" href="#"></a></li>'+
					'<li><a class="skin-orange" data-color="orange" href="#"></a></li>'+
				'</ul>'+
			'</div>'+
		'</div>')
	}

	const hasTemp = localStorage.getItem('skin-color');

	if(!!hasTemp) {
		$('head').append('<link id="tempSkin" rel="stylesheet" href="@/assets/css/style-'+hasTemp+'.css">')
		$('body').find('.skin-colors a').each(function(){
		const name = $(this).attr('data-color');

		if(name === hasTemp) {
			$(this).addClass('active');
		} else {
			$(this).removeClass('active');
		}
	})
	} else {
		$('body').find('.skin-colors a').each(function(){
			const name = $(this).attr('data-color');

			if(name === 'default') {
				$(this).addClass('active');
			}
		});
	}

	// Skin colors change event

	$(document).on('click', '.skin-colors a', function(e){
		e.preventDefault();

		$(this).parent().siblings().find('a').removeClass('active');
		$(this).addClass('active');

		var skin = $(this).attr('data-color');

		if(skin === 'default') {
			localStorage.removeItem('skin-color');
			$('#tempSkin').remove();
		} else {
			if($('#tempSkin').length === 0) {
				$('head').append('<link id="tempSkin" rel="stylesheet" href="@/assets/css/style-'+skin+'.css">')
			} else {
				$('#tempSkin').attr('href', '@/assets/css/style-'+skin+'.css');
			}
			localStorage.setItem('skin-color', skin);
		}
	})
      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    },
    computed: {
        currentpage() {
          return this.$route.path;
        },
      },
  data() {
      return {
        settings: {
suppressScrollX: true,
},
        activeClass: 'active',
      };
              //  isactive : true
    },
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
  },
}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
  .sidebar-menu ul li a.active {
    background-color: #03850e;
    color: #fff;
}
</style>
