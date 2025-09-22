import os
import codecs # Módulo para lidar com codificações de texto

# --- CONFIGURAÇÃO ---
# Defina as extensões de arquivo que você deseja converter.
# Adicione ou remova conforme necessário para o seu projeto Karenderia.
# EX: [".js", ".php", ".html", ".css", ".txt", ".json", ".xml", ".vue"]
FILE_EXTENSIONS = [".js", ".php", ".html", ".css", ".txt"]

# Codificação de origem que você identificou (ISO-8859-1)
SOURCE_ENCODING = 'iso-8859-1'

# Codificação de destino (UTF-8)
TARGET_ENCODING = 'utf-8'

# --- FUNÇÃO DE CONVERSÃO ---
def convert_file_encoding(filepath):
    try:
        # Abre o arquivo para leitura com a codificação de origem
        with codecs.open(filepath, 'r', encoding=SOURCE_ENCODING) as f:
            content = f.read()

        # Abre o arquivo para escrita com a codificação de destino
        # Por padrão, 'utf-8' em Python é sem BOM.
        with codecs.open(filepath, 'w', encoding=TARGET_ENCODING) as f:
            f.write(content)

        print(f"  Convertido: {filepath}")
        return True
    except UnicodeDecodeError:
        print(f"  AVISO: Erro de decodificação para '{filepath}'. O arquivo pode não ser {SOURCE_ENCODING}.")
        print("         Conteúdo original mantido.")
        return False
    except Exception as e:
        print(f"  ERRO ao converter '{filepath}': {e}")
        print("         Conteúdo original mantido.")
        return False

# --- LÓGICA PRINCIPAL ---
if __name__ == "__main__":
    print("ALERTA: FAÇA BACKUP COMPLETO DO SEU PROJETO ANTES DE EXECUTAR!")
    print(f"\nIniciando conversão de {SOURCE_ENCODING} para {TARGET_ENCODING} para arquivos com as extensões:")
    print(", ".join(FILE_EXTENSIONS))
    print("--------------------------------------------------------")

    # Percorre todos os arquivos e diretórios a partir do diretório atual
    for root, _, files in os.walk('.'):
        for filename in files:
            # Verifica se a extensão do arquivo está na nossa lista
            if any(filename.endswith(ext) for ext in FILE_EXTENSIONS):
                filepath = os.path.join(root, filename)
                convert_file_encoding(filepath)

    print("--------------------------------------------------------")
    print("Conversão em massa concluída. Verifique seu projeto.")