class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :title, :suffix
end
