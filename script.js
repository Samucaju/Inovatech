document.addEventListener('DOMContentLoaded', function() {
    var elementosCarregando = document.querySelectorAll('#status span');
    elementosCarregando.forEach(function(elemento) {
        elemento.classList.add('loader');
        elemento.textContent = '';
    });

    setTimeout(function() {
        atualizarDadosAmbiente();
    }, 3000);
});

function atualizarDadosAmbiente() {
    document.getElementById('temperatura').textContent = '25';
    document.getElementById('umidade').textContent = '60';
    document.getElementById('fumaca').textContent = 'Não detectada';

    var elementosCarregando = document.querySelectorAll('#status span');
    elementosCarregando.forEach(function(elemento) {
        elemento.classList.remove('loader');
    });

    setTimeout(function() {
        document.getElementById('fumaca').textContent = 'Detectada';
        document.getElementById('fumaca').classList.add('piscando');
        document.body.style.backgroundColor = '#ffcccc';
    }, 5000);
     document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                atualizarDadosAmbiente();
            }, 3000);
        });

        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(function() {
                atualizarDadosAmbiente();
            }, 3000);
        });

        function atualizarDadosAmbiente() {
            document.getElementById('temperatura').textContent = '25';
            document.getElementById('umidade').textContent = '60';
            document.getElementById('fumaca').textContent = 'Não detectada';

            setTimeout(function() {
                document.getElementById('fumaca').textContent = 'Detectada';
                document.body.classList.add('piscando');
                document.getElementById('avisoFumaca').style.display = 'block';
            }, 5000);
        }
}
