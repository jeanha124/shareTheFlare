json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description
  json.owner_id photo.owner_id
  json.img_url url_for(photo.picture)
end