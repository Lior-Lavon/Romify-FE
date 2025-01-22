export const updateAdvertParamsBody = (advert) => {
  const {
    id,
    type,
    entrance,
    rental_period,
    availability_from,
    availability_to,
    title,
    description,
    rental_surface_sq,
    apartment_surface_sq,
    furnished,
    is_private_toilet,
    is_private_shower,
    is_private_sink,
    energy_label,
    allow_pets,
    monthly_rent,
    deposit,
    additional_costs,
    additional_cost_description,
    utilities,
    internet,
    property_max_tenant,
    current_tenant_genders,
    current_tenant_languages,
    num_of_tenants,
    preferred_min_age,
    preferred_max_age,
    preferred_gender,
    preferred_tenant_languages,
    preferred_tenant_status,
    preferred_rent_period,
    furniture,
    attributes,
  } = advert;

  const retVal = { id };

  retVal.rental_period = rental_period;
  retVal.availability_from = availability_from;
  retVal.availability_to = availability_to;

  if (type != "") {
    retVal.type = type;
  }
  if (entrance != "") {
    retVal.entrance = entrance;
  }
  if (title != "") {
    retVal.title = title;
  }
  if (description != "") {
    retVal.description = description;
  }
  if (rental_surface_sq != 0) {
    retVal.rental_surface_sq = rental_surface_sq;
  }
  if (apartment_surface_sq != 0) {
    retVal.apartment_surface_sq = apartment_surface_sq;
  }
  retVal.furnished = furnished;
  retVal.furniture = furniture;
  retVal.attributes = attributes;

  retVal.is_private_toilet = is_private_toilet;
  retVal.is_private_shower = is_private_shower;
  retVal.is_private_sink = is_private_sink;

  if (energy_label != "") {
    retVal.energy_label = energy_label;
  }
  retVal.allow_pets = allow_pets;

  retVal.monthly_rent = monthly_rent;
  retVal.deposit = deposit;
  retVal.additional_costs = additional_costs;
  retVal.additional_cost_description = additional_cost_description;

  retVal.utilities = utilities;
  retVal.internet = internet;

  retVal.property_max_tenant = property_max_tenant;
  retVal.current_tenant_genders = current_tenant_genders;
  retVal.current_tenant_languages = current_tenant_languages;

  retVal.num_of_tenants = num_of_tenants;
  retVal.preferred_min_age = preferred_min_age;
  retVal.preferred_max_age = preferred_max_age;
  retVal.preferred_gender = preferred_gender;
  retVal.preferred_tenant_languages = preferred_tenant_languages;
  retVal.preferred_tenant_status = preferred_tenant_status;
  retVal.preferred_rent_period = preferred_rent_period;

  return retVal;
};
