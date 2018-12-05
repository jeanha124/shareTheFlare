# json.partial! 'api/photos/photo', photo: @photo
# json.set! @photo.id do
    # json.partial! 'api/photos/photo', photo: photo
    json.id @photo.id
    json.title @photo.title
    json.description @photo.description
    json.owner_id @photo.owner_id
    json.created_at @photo.created_at
    json.photoUrl url_for(@photo.picture)
    # json.avatarURL url_for(@photo.avatar)
    # json.cover_photoURL url_for(@photo.cover_photo)
  # end

json.comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :commenter_id, :body
    end
  end
end

json.tags do
  @tags.each do |tag|
    json.set! tag.id do
      json.extract! tag, :id, :title
    end
  end
end