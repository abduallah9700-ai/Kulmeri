require 'socket'
require 'uri'

PORT = 8080
PUBLIC_DIR = File.expand_path(__dir__)

MIME_TYPES = {
  '.html' => 'text/html; charset=utf-8',
  '.htm'  => 'text/html; charset=utf-8',
  '.css'  => 'text/css; charset=utf-8',
  '.js'   => 'application/javascript; charset=utf-8',
  '.json' => 'application/json; charset=utf-8',
  '.svg'  => 'image/svg+xml',
  '.jpg'  => 'image/jpeg',
  '.jpeg' => 'image/jpeg',
  '.png'  => 'image/png',
  '.gif'  => 'image/gif',
  '.webp' => 'image/webp',
  '.ico'  => 'image/x-icon',
  '.woff' => 'font/woff',
  '.woff2'=> 'font/woff2',
  '.ttf'  => 'font/ttf'
}

server = TCPServer.new('0.0.0.0', PORT)
puts "======================================================"
puts "  Kulmeri Academic Web Server Running"
puts "  URL: http://localhost:#{PORT}"
puts "  Directory: #{PUBLIC_DIR}"
puts "======================================================"
$stdout.flush

loop do
  Thread.start(server.accept) do |client|
    begin
      request_line = client.gets
      next unless request_line

      method, full_path, _ = request_line.split(' ')
      clean_path = URI.parse(full_path).path rescue '/'
      clean_path = '/index.html' if clean_path == '/' || clean_path == ''

      # Prevent directory traversal
      safe_path = File.expand_path(File.join(PUBLIC_DIR, clean_path))
      unless safe_path.start_with?(PUBLIC_DIR)
        client.print "HTTP/1.1 403 Forbidden\r\nContent-Length: 9\r\n\r\nForbidden"
        client.close
        next
      end

      if File.file?(safe_path)
        ext = File.extname(safe_path).downcase
        content_type = MIME_TYPES[ext] || 'application/octet-stream'
        data = File.binread(safe_path)

        client.print "HTTP/1.1 200 OK\r\n"
        client.print "Content-Type: #{content_type}\r\n"
        client.print "Content-Length: #{data.bytesize}\r\n"
        client.print "Connection: close\r\n"
        client.print "\r\n"
        client.write(data) unless method == 'HEAD'
      else
        body = "404 Not Found: #{clean_path}"
        client.print "HTTP/1.1 404 Not Found\r\n"
        client.print "Content-Type: text/plain\r\n"
        client.print "Content-Length: #{body.bytesize}\r\n"
        client.print "Connection: close\r\n"
        client.print "\r\n"
        client.print body unless method == 'HEAD'
      end
    rescue => e
      warn "Error: #{e.message}"
    ensure
      client.close rescue nil
    end
  end
end
