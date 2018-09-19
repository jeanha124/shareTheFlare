json.array! @photos do |photo|
  json.extract! photo, :id, :title, :description, :created_at
  json.owner_id photo.owner_id
  json.photoUrl url_for(photo.photo)
end