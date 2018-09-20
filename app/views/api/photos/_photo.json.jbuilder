json.extract! photo, :id, :title, :description, :owner_id, :created_at
json.photoUrl url_for(photo.picture)