	// GERAÇÃO DA URL DO EMBED
	function getUrlEmbed(variable_img) {
		var span_img  = variable_img.childNodes[0];
		var img_video = variable_img;

		if (span_img) { img_video = span_img.childNodes[0]; }

		var url_video = img_video.getAttribute('alt');
		var id_video  = url_video.split("?v=")[1];
		var iframe = document.getElementById('iframe_video');
		var url_embed = "https://www.youtube.com/embed/" + id_video;

		return url_embed;
	}

	// CRIAÇÃO DO MODAL RESPECTIVO AO VIDEO E QUESTÃO
	function createModal(variable_img, video_position) {

			var body = document.getElementsByTagName('body')[0];

			// CRIANDO DIV PARA RECEBER O CONTEUDO DO MODAL
			var div_modal = document.createElement("div");

			var url_embed = getUrlEmbed(variable_img);

			var modal_html = '';

			modal_html += '<div class="modal fade" id="click_play_' + video_position + '" tabindex="-1" role="dialog" aria-labelledby="click_play_label_' + video_position + '" aria-hidden="true">';
			modal_html += '  <div class="modal-dialog modal-lg" role="document">';
			modal_html += '    <div class="modal-content">';
			modal_html += '      <div class="modal-header">';
			modal_html += '        <button type="button" class="close" data-dismiss="modal" aria-label="Close">';
			modal_html += '          <span aria-hidden="true">&times;</span>';
			modal_html += '        </button>';
			modal_html += '      </div>';
			modal_html += '      <div class="modal-body">';
			modal_html += '		<div class="container_iframe">';
			modal_html += '			<iframe id="iframe_video" class="responsive-iframe" src="' + url_embed + '" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
			modal_html += '		</div>';
			modal_html += '      </div>';
			modal_html += '      <div class="modal-footer">';
			modal_html += '        <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>';
			modal_html += '      </div>';
			modal_html += '    </div>';
			modal_html += '  </div>';
			modal_html += '</div>';

			div_modal.innerHTML = modal_html;

			body.appendChild(div_modal);
	}

	// PEGA E DEFINE AS IMAGENS COM BASE NA CLASSE
	function clickPlay(initiator_class) {

		var a_imgs = document.getElementsByClassName(initiator_class);
		var video_position = 1;

		for(key in a_imgs){
			var classes = a_imgs[key].classList;
			
			if (classes) {
				// VERIFICANDO EXISENCIA E QUANTIDADE DE CLASSES
				if (classes.length >= 1) {

					// ADICIONANDO AÇÃO DE ABRIR MODAL AO CLICAR NAS IMAGENS
					a_imgs[key].setAttribute('data-toggle', 'modal');
					a_imgs[key].setAttribute('data-target', '#click_play_' + video_position);

					createModal(a_imgs[key], video_position);

					video_position++;
				}
			}
		}

	}
