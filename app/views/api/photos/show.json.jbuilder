json.set! :photo do
  json.partial! 'api/photos/photo', photo: @photo
end